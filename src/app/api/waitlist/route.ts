import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, building, expected_calls } = body;

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

    if (supabaseUrl && supabaseKey) {
      const payload: Record<string, string> = {
        email: email.toLowerCase().trim(),
        created_at: new Date().toISOString(),
      };
      if (name) payload.name = String(name).trim();
      if (building) payload.building = String(building).trim();
      if (expected_calls) payload.expected_calls = String(expected_calls);

      const res = await fetch(`${supabaseUrl}/rest/v1/api_waitlist`, {
        method: 'POST',
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal',
        },
        body: JSON.stringify(payload),
      });

      // 409 = duplicate email — treat as success to avoid enumeration
      if (!res.ok && res.status !== 409) {
        console.error('Supabase waitlist error:', await res.text());
        return NextResponse.json({ error: 'Failed to save. Please try again.' }, { status: 500 });
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Waitlist route error:', error);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
