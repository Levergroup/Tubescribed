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
  "From $9/month",
  "8 Seconds Per Video",
  "7-Day Free Trial",
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
  { name: "Pro", price: "$9", period: "/month", subtitle: "Less than two coffees", popular: true, features: ["50 transcripts/month", "50 AI content outputs", "3 brand workspaces", "All 15 output types", "Priority processing", "Email support"], cta: "Start Free Trial", ctaHref: `https://app.tubescribed.com/signup?plan=pro`, note: "7-day free trial · Cancel anytime" },
  { name: "Agency", price: "$29", period: "/month", subtitle: "For teams & agencies", popular: false, features: ["150 transcripts/month", "150 AI content outputs", "Unlimited brand profiles", "5 team members", "White-label outputs", "Priority support"], cta: "Start Free Trial", ctaHref: `https://app.tubescribed.com/signup?plan=agency`, note: "7-day free trial · Cancel anytime" },
];

export const PRICING_FAQ = [
  { q: "How does the 7-day free trial work?", a: "Start either plan free for 7 days. No charge until the trial ends. Cancel anytime before then and you won't be billed." },
  { q: "What counts as one transcript?", a: "One YouTube video = one transcript credit. There's no limit on video length." },
  { q: "Can I change plans anytime?", a: "Yes. Upgrade, downgrade, or cancel anytime — no lock-in." },
  { q: "Will the AI sound like me?", a: "That's exactly what Brand Workspace is for. Set up your voice and tone once — every output matches automatically." },
  { q: "What's the difference between Pro and Agency?", a: "Agency gives you unlimited brand profiles, 5 team members, white-label outputs, and higher volume — built for teams managing multiple clients." },
  { q: "Can I use this for client work?", a: "Yes. The Agency plan is built for this — save each client as a separate brand profile." },
];

export const COMPARISON_FEATURES_OTTER = [
  { feature: "YouTube URL → transcript", tubescribed: "✓ Direct paste", competitor: "✗ Must upload recording" },
  { feature: "Brand voice profiles", tubescribed: "✓ Built-in", competitor: "✗ Not available" },
  { feature: "SOP generator", tubescribed: "✓ Yes", competitor: "✗ No" },
  { feature: "Blog post generation", tubescribed: "✓ Yes", competitor: "✗ No" },
  { feature: "15 content output types", tubescribed: "✓ Yes", competitor: "✗ No" },
  { feature: "Built for YouTube creators", tubescribed: "✓ Yes", competitor: "✗ No" },
  { feature: "Starting price", tubescribed: "$9/mo (7-day trial)", competitor: "$17/mo" },
  { feature: "Primary use case", tubescribed: "YouTube content repurposing", competitor: "Live meeting notes" },
];

export const COMPARISON_FEATURES_DESCRIPT = [
  { feature: "YouTube URL → transcript", tubescribed: "✓ Direct paste", competitor: "✗ Requires video upload" },
  { feature: "Brand voice profiles", tubescribed: "✓ Built-in", competitor: "✗ Not available" },
  { feature: "SOP generator", tubescribed: "✓ Yes", competitor: "✗ No" },
  { feature: "Blog post generation", tubescribed: "✓ Yes", competitor: "✗ No" },
  { feature: "15 content output types", tubescribed: "✓ Yes", competitor: "✗ No" },
  { feature: "Built for YouTube creators", tubescribed: "✓ Yes", competitor: "✗ No" },
  { feature: "Starting price", tubescribed: "$9/mo (7-day trial)", competitor: "$24–48/mo" },
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
