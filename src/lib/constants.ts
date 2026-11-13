export const APP_URL = "https://app.tubescribed.com";

export const USE_CASE_LINKS = [
  { label: "For Creators",                  href: "/for/content-creators" },
  { label: "For Agencies",                   href: "/for/agencies" },
  { label: "For Coaches",                    href: "/for/coaches" },
  { label: "For Researchers",               href: "/for/researchers" },
  { label: "For Educators",                  href: "/for/educators" },
  { label: "For International Professionals", href: "/for/international-professionals" },
];

export const NAV_LINKS = [
  { label: "How it Works", href: "/#how-it-works" },
  { label: "Features",     href: "/features" },
  { label: "Tools",        href: "/tools" },
  { label: "Pricing",      href: "/pricing" },
  { label: "Blog",         href: "/blog" },
  { label: "Developers",   href: "/developers" },
];

export const METRICS = [
  "3,000+ Videos Transcribed",
  "15 Output Types",
  "From $19/month",
  "8 Seconds Per Video",
  "Free Run — No Credit Card",
];

export const FEATURES = [
  { icon: "FileText", title: "YouTube URL → Clean Transcript", description: "Paste any public YouTube link — with or without captions — and get a clean, timestamped transcript straight from the audio. Videos up to 90 minutes. 1 credit per 10 minutes, always shown before processing." },
  { icon: "Layers", title: "Brand Workspace Profiles", description: "Save your brand voice, tone, and guidelines once. Every output TubeScribed generates sounds exactly like you — automatically." },
  { icon: "ClipboardList", title: "Branded SOP Generator", description: "Turn any video into a ready-to-use Standard Operating Procedure. Document your methodology. Build your system." },
  { icon: "Grid3x3", title: "15 Content Output Types", description: "Blog posts, email sequences, social captions, LinkedIn posts, YouTube descriptions, newsletters, training guides, and more." },
  { icon: "Users", title: "Unlimited Brand Profiles", description: "Agency plan: save every client as a separate brand profile. Every transcript comes out in their voice. One tool, every client." },
  { icon: "Wand2", title: "Claude AI Powered", description: "Powered by Anthropic's Claude — the same AI used by Fortune 500 companies. Not generic captions. Clean, structured, intelligent output." },
  { icon: "TrendingUp", title: "Monthly Progress Reports", description: "Every month you get a personal report: hours saved, content pieces created, and your growing content library score — calculated from your real usage." },
  { icon: "TrendingUp", title: "Turn competitor videos into structured intelligence", description: "Process any competitor's YouTube content — interviews, product demos, conference talks. Extract their key talking points, identify content gaps, and understand their positioning. Better context for every strategic decision." },
  { icon: "Users", title: "Make your content accessible to everyone", description: "Every transcript TubeScribed generates meets readability standards for hearing-impaired users, non-native English speakers, and readers who process faster than they listen. Better context. Broader reach." },
];

export const PLANS = [
  { name: "Pro", price: "$19", period: "/month", subtitle: "Less than one hour of VA time. One transcript pays for the entire month.", popular: false, features: ["30 credits/month", "1 credit = 10 min of video or 1 AI output", "3 brand workspaces", "Claude AI brand voice on every output", "Download as .txt instantly", "Monthly progress report", "Email support", "Videos up to 90 minutes, with or without captions"], cta: "Start Pro", ctaHref: `https://app.tubescribed.com/signup?plan=pro`, note: "Try free — no credit card" },
  { name: "Agency", price: "$49", period: "/month", subtitle: "You're billing clients hundreds per month. TubeScribed at $49 is a rounding error.", popular: true, features: ["100 credits/month", "1 credit = 10 min of video or 1 AI output", "Unlimited brand workspaces", "5 team members", "Everything in Pro", "Monthly progress report", "Priority support", "Videos up to 90 minutes, with or without captions", "Best value for longer content"], cta: "Start Agency", ctaHref: `https://app.tubescribed.com/signup?plan=agency`, note: "Try free — no credit card" },
];

export const CREDIT_PACKS = [
  { name: "Starter", credits: 10, price: "$8", description: "About 100 minutes of video — e.g. ten 10-minute videos or one 90-minute webinar", ctaHref: `https://app.tubescribed.com/signup` },
  { name: "Growth", credits: 25, price: "$18", description: "About 250 minutes of video — e.g. eight 30-minute podcasts", ctaHref: `https://app.tubescribed.com/signup` },
  { name: "Pro Pack", credits: 50, price: "$32", description: "About 500 minutes of video — e.g. eight 60-minute webinars", ctaHref: `https://app.tubescribed.com/signup` },
];

export const PRICING_FAQ = [
  { q: "How does the free run work?", a: "New users get free credits to try TubeScribed — no credit card needed. After that, Pro is $19/month and Agency is $49/month. Credit packs are available for extra usage and never expire." },
  { q: "How do credits work with longer videos?", a: "1 credit covers up to 10 minutes of video, rounded up: a 4-minute video uses 1 credit, a 23-minute video uses 3, and a 60-minute video uses 6 (maximum 90 minutes = 9 credits). Each AI output generated from a transcript uses 1 credit. You'll always see exactly how many credits a video will use before you confirm. Credits are only deducted after success, and processing the same video again never costs extra on our side." },
  { q: "What happens if I run out of credits mid-month?", a: "Your monthly credits reset every billing cycle. If you need more before your reset date, grab a credit pack — Starter (10 credits/$8), Growth (25 credits/$18), or Pro Pack (50 credits/$32). Credits never expire so they carry over indefinitely." },
  { q: "What is the maximum video length TubeScribed supports?", a: "TubeScribed supports videos up to 90 minutes in length. Videos over 90 minutes cannot be processed due to audio file size limits. For longer content we recommend processing individual chapters or segments separately." },
  { q: "What counts as one transcript?", a: "Credits are based on length: 1 credit per started 10 minutes of video. A 10-minute video is 1 credit, a 25-minute video is 3. You'll always see the exact credit cost before confirming." },
  { q: "Can I change plans anytime?", a: "Yes. Upgrade, downgrade, or cancel anytime — no lock-in." },
  { q: "Will the AI sound like me?", a: "That's exactly what Brand Workspace is for. Set up your voice and tone once — every output matches automatically." },
  { q: "What's the difference between Pro and Agency?", a: "Agency gives you unlimited brand workspaces, 5 team members, and higher volume — built for teams managing multiple clients. Pro is built for solo creators and coaches. Both start with a free run, no credit card needed." },
  { q: "Can I use this for client work?", a: "Yes. The Agency plan is built for this — save each client as a separate brand profile." },
  { q: "Why can't I just use ChatGPT or Claude for this?", a: "ChatGPT and Claude can't watch YouTube videos — paste a link and they'll either refuse or guess. Gemini can summarize some videos, but you don't get a clean, complete transcript or documents in your brand voice. You'd still have to manually find captions, clean them, copy them in, write a prompt, and repeat that for every output type you need. TubeScribed handles the entire pipeline — extraction, transcription, cleanup, brand voice, and asset generation — in a single paste. It's not a replacement for AI chat tools. It's the missing first step they can't do — and you can now connect TubeScribed directly to Claude, so Claude can do it for you." },
  { q: "How is this different from just copying YouTube's auto-captions?", a: "YouTube auto-captions are unpunctuated, unformatted walls of text filled with transcription errors. They're technically readable but practically unusable for any business purpose. TubeScribed transcribes the video's audio itself, then Claude AI cleans it — adding punctuation, fixing errors, removing filler words — and structures it with a title, summary, key takeaways, and timestamped segments. The output is publication-ready, not raw caption data." },
  { q: "Can I use TubeScribed to feed content into my AI agents or custom GPTs?", a: "Yes — this is one of the most powerful use cases. Clean, structured transcripts are exactly what AI agents, custom GPTs, and knowledge bases need as context. TubeScribed gives you a properly formatted, punctuated, organized transcript you can paste directly into any AI tool, RAG pipeline, or knowledge base. No manual prep work." },
  { q: "What kinds of videos work best with TubeScribed?", a: "YouTube tutorials, podcast episodes posted to YouTube, coaching calls, training videos, interviews, webinars, course content, and conference talks. Any video where the spoken content has business value — and where you'd rather have a document than sit through the full video. Videos up to 90 minutes are supported, with or without captions." },
  { q: "Will the AI outputs actually sound like my brand?", a: "That's what the Brand Workspace is for. You set up your brand once — your tone, your audience, your core values, your writing style. Every transcript cleanup, SOP, blog post, and content output TubeScribed generates automatically applies that brand voice. Agency users can save unlimited brand profiles — one per client — so every output is already in the right voice before you touch it." },
  { q: "What is a Brand SOP and why would I need one?", a: "A Standard Operating Procedure (SOP) is a documented, repeatable business process. TubeScribed's SOP generator takes any transcript — a training video, a coaching call, a tutorial — and turns it into a formatted, step-by-step process document written in your brand voice. Business coaches use it to document their methodology. Agencies use it to create client-facing deliverables. Operators use it to systematize training content without starting from scratch." },
  { q: "What are credit packs?", a: "Credit packs are one-time purchases that never expire. Use them for extra video minutes or AI outputs beyond your monthly plan (1 credit = up to 10 minutes of video or 1 AI output). Starter: 10 credits for $8. Growth: 25 credits for $18. Pro Pack: 50 credits for $32. No subscription required — buy when you need them." },
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
    { label: "Features", href: "/features" },
    { label: "Tools", href: "/tools" },
    { label: "Pricing", href: "/pricing" },
    { label: "Free Transcript Tool", href: "/free-tools/youtube-transcript-generator" },
    { label: "Use in Claude", href: "/integrations/claude" },
    { label: "Developer API", href: "/developers" },
    { label: "ROI Calculator", href: "/roi-calculator" },
    { label: "Changelog", href: "/changelog" },
  ],
  useCases: [
    { label: "For Content Creators", href: "/for/content-creators" },
    { label: "For Agencies", href: "/for/agencies" },
    { label: "For Business Coaches", href: "/for/coaches" },
    { label: "For AI Builders", href: "/for/ai-builders" },
    { label: "For Podcasters", href: "/for/podcasters" },
    { label: "For Course Creators", href: "/for/course-creators" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Affiliate Program", href: "/affiliate" },
    { label: "Contact", href: "/contact" },
  ],
  compliance: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "GDPR", href: "/gdpr" },
    { label: "Acceptable Use", href: "/acceptable-use" },
  ],
};
