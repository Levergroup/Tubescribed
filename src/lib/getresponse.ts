// Server-only GetResponse v3 client.
// No external dependencies — uses fetch. Never throws to the caller; every
// function logs failures server-side (never the API key) and returns a
// boolean / null so callers can treat lead capture as non-blocking.

const BASE_URL = "https://api.getresponse.com/v3";

function authHeaders(): Record<string, string> {
  return {
    "X-Auth-Token": `api-key ${process.env.GETRESPONSE_API_KEY ?? ""}`,
    "Content-Type": "application/json",
  };
}

// The "source" custom field id is stable for the account — cache it in memory
// so we only look it up once per server instance.
let cachedSourceFieldId: string | null = null;

export async function getSourceFieldId(): Promise<string | null> {
  if (cachedSourceFieldId) return cachedSourceFieldId;
  try {
    const res = await fetch(`${BASE_URL}/custom-fields?query[name]=source`, {
      method: "GET",
      headers: authHeaders(),
    });
    if (!res.ok) {
      console.error(`GetResponse getSourceFieldId failed: ${res.status}`);
      return null;
    }
    const data = await res.json();
    const field = Array.isArray(data) ? data[0] : null;
    if (field?.customFieldId) {
      cachedSourceFieldId = field.customFieldId as string;
      return cachedSourceFieldId;
    }
    return null;
  } catch (err) {
    console.error(
      "GetResponse getSourceFieldId error:",
      err instanceof Error ? err.message : "unknown error",
    );
    return null;
  }
}

// Optional "lead_origin" text field: where the visitor came from (utm / referrer).
// Create a text custom field named lead_origin in GetResponse to start storing it.
const cachedFieldIds: Record<string, string | null> = {};

async function getFieldIdByName(name: string): Promise<string | null> {
  if (name in cachedFieldIds) return cachedFieldIds[name];
  try {
    const res = await fetch(`${BASE_URL}/custom-fields?query[name]=${encodeURIComponent(name)}`, {
      method: "GET",
      headers: authHeaders(),
    });
    if (!res.ok) return null;
    const data = await res.json();
    const field = Array.isArray(data) ? data.find((f: { name?: string }) => f?.name === name) : null;
    cachedFieldIds[name] = (field?.customFieldId as string) ?? null;
    return cachedFieldIds[name];
  } catch {
    return null;
  }
}

interface AddToListArgs {
  email: string;
  listId: string;
  name?: string;
  source?: string;
  origin?: string;
}

export async function addToList({
  email,
  listId,
  name,
  source,
  origin,
}: AddToListArgs): Promise<boolean> {
  try {
    if (!process.env.GETRESPONSE_API_KEY || !listId) {
      console.error("GetResponse addToList: missing API key or list id");
      return false;
    }

    const customFieldValues: { customFieldId: string; value: string[] }[] = [];
    if (source) {
      const customFieldId = await getSourceFieldId();
      if (customFieldId) {
        customFieldValues.push({ customFieldId, value: [source] });
      }
    }
    if (origin) {
      const originFieldId = await getFieldIdByName("lead_origin");
      if (originFieldId) {
        customFieldValues.push({ customFieldId: originFieldId, value: [origin.slice(0, 255)] });
      }
    }

    const body: Record<string, unknown> = {
      email,
      campaign: { campaignId: listId },
      customFieldValues,
    };
    if (name) body.name = name;

    const res = await fetch(`${BASE_URL}/contacts`, {
      method: "POST",
      headers: authHeaders(),
      body: JSON.stringify(body),
    });

    // 202 Accepted — contact queued for add.
    // 409 Conflict — contact already on the list. Both are success for us.
    if (res.status === 202 || res.status === 409) return true;

    console.error(`GetResponse addToList failed: ${res.status}`);
    return false;
  } catch (err) {
    console.error(
      "GetResponse addToList error:",
      err instanceof Error ? err.message : "unknown error",
    );
    return false;
  }
}

export async function removeFromList(
  email: string,
  listId: string,
): Promise<boolean> {
  try {
    const lookup = await fetch(
      `${BASE_URL}/contacts?query[email]=${encodeURIComponent(
        email,
      )}&query[campaignId]=${encodeURIComponent(listId)}`,
      { method: "GET", headers: authHeaders() },
    );
    if (!lookup.ok) {
      console.error(`GetResponse removeFromList lookup failed: ${lookup.status}`);
      return false;
    }
    const data = await lookup.json();
    const contact = Array.isArray(data) ? data[0] : null;
    if (!contact?.contactId) return true; // nothing on this list to remove

    const del = await fetch(`${BASE_URL}/contacts/${contact.contactId}`, {
      method: "DELETE",
      headers: authHeaders(),
    });
    if (del.ok || del.status === 202) return true;

    console.error(`GetResponse removeFromList delete failed: ${del.status}`);
    return false;
  } catch (err) {
    console.error(
      "GetResponse removeFromList error:",
      err instanceof Error ? err.message : "unknown error",
    );
    return false;
  }
}
