// Shared, server-safe data for the API (/developers) and Claude (/integrations/claude) pages.
// Kept out of "use client" files so server pages can use it for JSON-LD.

export const DEVELOPER_FAQS = [
  {
    q: "Where do I get an API key?",
    a: "Sign in to TubeScribed at app.tubescribed.com and open Settings → API Keys. Create a key, copy it (it's shown once), and send it as a Bearer token. You can revoke keys there at any time.",
  },
  {
    q: "Is the API included in my plan?",
    a: "Yes. Every plan includes API calls: Free Run 10, Pro 200 and Agency 1,000 per calendar month. Only transcribe_video and generate_asset count toward the limit, and failed calls don't count.",
  },
  {
    q: "What happens if a video has no captions?",
    a: "TubeScribed builds transcripts from a video's existing captions, so videos without captions return a 422 error and don't count toward your limit. Most public videos have captions, including YouTube's automatic ones.",
  },
  {
    q: "Is there a rate limit?",
    a: "Yes, 10 requests per minute per key. Requests over the limit, or over your monthly allowance, return a 429 error.",
  },
  {
    q: "Can I use TubeScribed inside Claude instead of writing code?",
    a: "Yes. Add TubeScribed as a connector in Claude and ask in plain English, for example 'transcribe this video and turn it into an SOP'. No API key needed; it uses secure sign-in. See the Claude integration page for setup.",
  },
];

export const CLAUDE_FAQS = [
  {
    q: "Do I need an API key to use TubeScribed in Claude?",
    a: "No. The connector uses secure sign-in: you log in with your TubeScribed account and click Allow. Your key never appears in a URL or a chat.",
  },
  {
    q: "Which Claude plans support custom connectors?",
    a: "Custom connectors are available in Claude on the web and desktop apps for plans that include them. If you don't see 'Add custom connector' under Settings → Connectors, check your Claude plan or ask your workspace admin.",
  },
  {
    q: "Does it count toward my TubeScribed plan?",
    a: "Yes. Transcriptions and asset generations in Claude use the same monthly allowance as the API: Free Run 10, Pro 200, Agency 1,000. Failed calls don't count.",
  },
  {
    q: "Why does Claude return raw captions?",
    a: "Raw captions come back in seconds, and Claude can read and clean them itself. If you want TubeScribed's cleaned transcript, just ask Claude for a cleaned version.",
  },
  {
    q: "What if a video has no captions or is very long?",
    a: "Videos need existing captions to be transcribed. For very long videos, ask for the raw transcript first, then generate assets from that text. It's faster and avoids timeouts.",
  },
];

export const CLAUDE_STEPS = [
  { name: "Open Claude settings", text: "In Claude, go to Settings → Connectors." },
  { name: "Add a custom connector", text: "Click 'Add custom connector', name it TubeScribed, and paste the connector URL." },
  { name: "Connect and sign in", text: "Click Connect, sign in with your TubeScribed account, and click Allow." },
  { name: "Ask Claude", text: "Start a chat and ask Claude to transcribe a YouTube video or turn it into an SOP, blog post or email sequence." },
];
