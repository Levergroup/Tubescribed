export const APP_URL = "https://app.tubescribed.com";

export const NAV_LINKS = [
  { label: "How it Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "For Creators", href: "/for-creators" },
  { label: "For Agencies", href: "/for-agencies" },
  { label: "For Coaches", href: "/for-coaches" },
];

export const METRICS = [
  "3,000+ Videos Transcribed",
  "15 Output Types",
  "From $19/month",
  "8 Seconds Per Video",
  "Free Run — No Credit Card",
];

export const FEATURES = [
  { icon: "FileText", title: "YouTube URL → Clean Transcript", description: "Paste any YouTube link and get a publication-ready transcript in seconds. No uploading, no downloading, no waiting." },
  { icon: "Layers", title: "Brand Workspace Profiles", description: "Save your brand voice, tone, and guidelines once. Every output TubeScribed generates sounds exactly like you — automatically." },
  { icon: "ClipboardList", title: "Branded SOP Generator", description: "Turn any video into a ready-to-use Standard Operating Procedure. Document your methodology. Build your system." },
  { icon: "Grid3x3", title: "15 Content Output Types", description: "Blog posts, email sequences, social captions, LinkedIn posts, YouTube descriptions, newsletters, training guides, and more." },
  { icon: "Users", title: "Unlimited Brand Profiles", description: "Agency plan: save every client as a separate brand profile. Every transcript comes out in their voice. One tool, every client." },
  { icon: "Wand2", title: "Claude AI Powered", description: "Powered by Anthropic's Claude — the same AI used by Fortune 500 companies. Not generic captions. Clean, structured, intelligent output." },
];

export const PLANS = [
  { name: "Pro", price: "$19", period: "/month", subtitle: "Less than one hour of VA time. One transcript pays for the entire month.", popular: false, features: ["30 transcripts/month", "30 AI outputs/month", "3 brand workspaces", "Claude AI brand voice on every output", "Download as .txt instantly", "Email support"], cta: "Start Pro", ctaHref: `https://app.tubescribed.com/signup?plan=pro`, note: "Try free — 1 transcript, no credit card" },
  { name: "Agency", price: "$49", period: "/month", subtitle: "You're billing clients hundreds per month. TubeScribed at $49 is a rounding error.", popular: true, features: ["100 transcripts/month", "100 AI outputs/month", "Unlimited brand workspaces", "5 team members", "Everything in Pro", "Priority support"], cta: "Start Agency", ctaHref: `https://app.tubescribed.com/signup?plan=agency`, note: "Try free — 1 transcript, no credit card" },
];

export const CREDIT_PACKS = [
  { name: "Starter", credits: 10, price: "$8", ctaHref: `https://app.tubescribed.com/signup` },
  { name: "Growth", credits: 25, price: "$18", ctaHref: `https://app.tubescribed.com/signup` },
  { name: "Pro Pack", credits: 50, price: "$32", ctaHref: `https://app.tubescribed.com/signup` },
];

export const PRICING_FAQ = [
  { q: "How does the free run work?", a: "New users get 1 free transcript and 1 free AI output — no credit card needed. After that, Pro is $19/month and Agency is $49/month. Credit packs are available for extra usage and never expire." },
  { q: "What counts as one transcript?", a: "One YouTube video = one transcript credit. There's no limit on video length." },
  { q: "Can I change plans anytime?", a: "Yes. Upgrade, downgrade, or cancel anytime — no lock-in." },
  { q: "Will the AI sound like me?", a: "That's exactly what Brand Workspace is for. Set up your voice and tone once — every output matches automatically." },
  { q: "What's the difference between Pro and Agency?", a: "Agency gives you unlimited brand workspaces, 5 team members, and higher volume — built for teams managing multiple clients. Pro is built for solo creators and coaches. Both start with a free run, no credit card needed." },
  { q: "Can I use this for client work?", a: "Yes. The Agency plan is built for this — save each client as a separate brand profile." },
  { q: "Why can't I just use ChatGPT or Claude for this?", a: "ChatGPT, Claude, and Gemini cannot access YouTube URLs. If you paste a link into any of them, they'll either refuse or hallucinate the content. You'd still have to manually find captions, clean them, copy them in, write a prompt, and repeat that for every output type you need. TubeScribed handles the entire pipeline — extraction, transcription, cleanup, brand voice, and asset generation — in a single paste. It's not a replacement for AI chat tools. It's the missing first step they can't do." },
  { q: "How is this different from just copying YouTube's auto-captions?", a: "YouTube auto-captions are unpunctuated, unformatted walls of text filled with transcription errors. They're technically readable but practically unusable for any business purpose. TubeScribed runs the audio through OpenAI Whisper for accurate transcription, then Claude AI cleans it — adding punctuation, fixing errors, removing filler words — and structures it with a title, summary, key takeaways, and timestamped segments. The output is publication-ready, not raw caption data." },
  { q: "Can I use TubeScribed to feed content into my AI agents or custom GPTs?", a: "Yes — this is one of the most powerful use cases. Clean, structured transcripts are exactly what AI agents, custom GPTs, and knowledge bases need as context. TubeScribed gives you a properly formatted, punctuated, organized transcript you can paste directly into any AI tool, RAG pipeline, or knowledge base. No manual prep work." },
  { q: "What kinds of videos work best with TubeScribed?", a: "YouTube tutorials, podcast episodes posted to YouTube, coaching calls, training videos, interviews, webinars, course content, and conference talks. Any video where the spoken content has business value — and where you'd rather have a document than sit through the full video. Current limit is videos up to approximately 25–30 minutes due to audio file size constraints." },
  { q: "Will the AI outputs actually sound like my brand?", a: "That's what the Brand Workspace is for. You set up your brand once — your tone, your audience, your core values, your writing style. Every transcript cleanup, SOP, blog post, and content output TubeScribed generates automatically applies that brand voice. Agency users can save unlimited brand profiles — one per client — so every output is already in the right voice before you touch it." },
  { q: "What is a Brand SOP and why would I need one?", a: "A Standard Operating Procedure (SOP) is a documented, repeatable business process. TubeScribed's SOP generator takes any transcript — a training video, a coaching call, a tutorial — and turns it into a formatted, step-by-step process document written in your brand voice. Business coaches use it to document their methodology. Agencies use it to create client-facing deliverables. Operators use it to systematize training content without starting from scratch." },
  { q: "What are credit packs?", a: "Credit packs are one-time purchases that never expire. Use them for extra transcripts or AI outputs beyond your monthly plan. Starter: 10 credits for $8. Growth: 25 credits for $18. Pro Pack: 50 credits for $32. No subscription required — buy when you need them." },
];

export const COMPARISON_FEATURES_OTTER = [
  { feature: "YouTube URL → transcript", tubescribed: "✓ Direct paste", competitor: "✗ Must upload recording" },
  { feature: "Brand voice profiles", tubescribed: "✓ Built-in", competitor: "✗ Not available" },
  { feature: "SOP generator", tubescribed: "✓ Yes", competitor: "✗ No" },
  { feature: "Blog post generation", tubescribed: "✓ Yes", competitor: "✗ No" },
  { feature: "15 content output types", tubescribed: "✓ Yes", competitor: "✗ No" },
  { feature: "Built for YouTube creators", tubescribed: "✓ Yes", competitor: "✗ No" },
  { feature: "Starting price", tubescribed: "$19/mo (free run)", competitor: "$17/mo" },
  { feature: "Primary use case", tubescribed: "YouTube content repurposing", competitor: "Live meeting notes" },
];

export const COMPARISON_FEATURES_DESCRIPT = [
  { feature: "YouTube URL → transcript", tubescribed: "✓ Direct paste", competitor: "✗ Requires video upload" },
  { feature: "Brand voice profiles", tubescribed: "✓ Built-in", competitor: "✗ Not available" },
  { feature: "SOP generator", tubescribed: "✓ Yes", competitor: "✗ No" },
  { feature: "Blog post generation", tubescribed: "✓ Yes", competitor: "✗ No" },
  { feature: "15 content output types", tubescribed: "✓ Yes", competitor: "✗ No" },
  { feature: "Built for YouTube creators", tubescribed: "✓ Yes", competitor: "✗ No" },
  { feature: "Starting price", tubescribed: "$19/mo (free run)", competitor: "$24–48/mo" },
  { feature: "Primary use case", tubescribed: "YouTube content repurposing", competitor: "Video editing suite" },
];

export const FOOTER_LINKS = {
  product: [
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "Transcript Tool", href: "https://app.tubescribed.com/signup" },
    { label: "Content Studio", href: "https://app.tubescribed.com/signup" },
  ],
  useCases: [
    { label: "For Content Creators", href: "/for-creators" },
    { label: "For Agencies", href: "/for-agencies" },
    { label: "For Coaches", href: "/for-coaches" },
  ],
  compare: [
    { label: "TubeScribed vs Otter.ai", href: "/vs-otter" },
    { label: "TubeScribed vs Descript", href: "/vs-descript" },
    { label: "TubeScribed vs Manual", href: "/pricing" },
  ],
};
