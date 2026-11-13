// Shared, server-safe data for the API (/developers) and Claude (/integrations/claude) pages.
// Kept out of "use client" files so server pages can use it for JSON-LD.

export const DEVELOPER_FAQS = [
  {
    q: "Where do I get an API key?",
    a: "Sign in to TubeScribed at app.tubescribed.com and open Settings → API Keys. Create a key, copy it (it's shown once), and send it as a Bearer token. You can revoke keys there at any time.",
  },
  {
    q: "Is the API included in my plan?",
    a: "Yes. Every plan includes API and Claude connector credits: Free Run 10, Pro 200 and Agency 1,000 per calendar month. transcribe_video uses 1 credit per started 10 minutes of video (a 23-minute video uses 3), and generate_asset uses 1 credit. Failed calls never cost credits.",
  },
  {
    q: "Does the video need captions?",
    a: "No. TubeScribed transcribes the video's audio, so it works on any public YouTube video up to 90 minutes, including brand-new uploads with no captions yet. Long videos run in the background: if a call returns a pending status, repeat the same request a minute or two later to get the result without a second charge.",
  },
  {
    q: "Is there a rate limit?",
    a: "Yes, 10 requests per minute per key. Requests over the rate limit, or over your monthly credits, return a 429 error.",
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
    a: "Yes. Transcriptions and asset generations in Claude use the same monthly credits as the API: Free Run 10, Pro 200, Agency 1,000. A transcript uses 1 credit per started 10 minutes of video. Failed calls don't count, and asking again for the same video never charges twice.",
  },
  {
    q: "Why does Claude sometimes say the video is still processing?",
    a: "TubeScribed transcribes the audio of every video, which can take a minute or two for longer videos. Claude gets a pending message and can simply ask again; the finished transcript comes back without a second charge.",
  },
  {
    q: "Does it work on videos without captions?",
    a: "Yes. TubeScribed transcribes from the audio, so captions aren't needed. Videos up to 90 minutes are supported. For long videos, get the transcript first, then generate assets from that text.",
  },
];

export const CLAUDE_STEPS = [
  { name: "Open Claude settings", text: "In Claude, go to Settings → Connectors." },
  { name: "Add a custom connector", text: "Click 'Add custom connector', name it TubeScribed, and paste the connector URL." },
  { name: "Connect and sign in", text: "Click Connect, sign in with your TubeScribed account, and click Allow." },
  { name: "Ask Claude", text: "Start a chat and ask Claude to transcribe a YouTube video or turn it into an SOP, blog post or email sequence." },
];
