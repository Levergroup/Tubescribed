import { NextRequest, NextResponse } from 'next/server'

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

// ─── Manifest ────────────────────────────────────────────────────────────────

const MANIFEST = {
  schema_version: 'v1',
  name: 'tubescribed',
  display_name: 'TubeScribed',
  description:
    'TubeScribed turns any YouTube video URL into transcripts, blog posts, SOPs, email sequences, social captions, FAQs, and training guides using OpenAI Whisper and Claude AI.',
  contact_email: 'hello@tubescribed.com',
  legal_url: 'https://www.tubescribed.com/terms-of-service',
  logo_url: 'https://www.tubescribed.com/images/logo.png',
  tools: [
    {
      name: 'get_page_content',
      description:
        'Returns content and metadata for a TubeScribed marketing page. Use this to answer questions about what TubeScribed is, what it costs, what features it has, or who it is for.',
      input_schema: {
        type: 'object',
        properties: {
          slug: {
            type: 'string',
            description:
              'Page identifier. One of: home, pricing, features, blog, about, use-cases, tools, developers',
          },
        },
        required: ['slug'],
      },
    },
    {
      name: 'list_features',
      description:
        'Returns all TubeScribed output types and core platform features. Use this to understand what content formats the tool supports.',
      input_schema: {
        type: 'object',
        properties: {},
        required: [],
      },
    },
    {
      name: 'get_pricing',
      description:
        'Returns current TubeScribed pricing tiers, credit pack options, and credit usage logic.',
      input_schema: {
        type: 'object',
        properties: {},
        required: [],
      },
    },
    {
      name: 'get_use_cases',
      description:
        'Returns primary user personas, their problems, and how TubeScribed solves them.',
      input_schema: {
        type: 'object',
        properties: {},
        required: [],
      },
    },
    {
      name: 'submit_email',
      description:
        'Subscribes an email address to the TubeScribed newsletter and waitlist.',
      input_schema: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            description: 'Valid email address to subscribe.',
          },
          source: {
            type: 'string',
            description: 'Optional: source identifier for tracking (e.g. "agent", "research").',
          },
        },
        required: ['email'],
      },
    },
  ],
}

// ─── Tool implementations ─────────────────────────────────────────────────────

const PAGE_CONTENT: Record<string, unknown> = {
  home: {
    title: 'TubeScribed — Turn YouTube Videos Into Branded Business Assets',
    tagline: 'Paste a YouTube URL. Get a transcript, SOP, blog post, email sequence, and more — in seconds.',
    hero_cta: { label: 'Start Free', url: 'https://app.tubescribed.com/signup' },
    key_points: [
      'Powered by OpenAI Whisper for transcription and Claude AI for content generation',
      'Supports 15 content output types from a single YouTube URL',
      'Brand Workspace stores your voice, tone, and guidelines once — applied to every output',
      'First transcript and output are free, no credit card required',
    ],
  },
  pricing: {
    title: 'TubeScribed Pricing',
    plans: [
      { name: 'Free', price: '$0', transcripts: 1, outputs: 1, note: 'No credit card required.' },
      { name: 'Pro', price: '$19/month', transcripts: 30, outputs: 30, workspaces: 3, support: 'Email' },
      { name: 'Agency', price: '$49/month', transcripts: 100, outputs: 100, workspaces: 'Unlimited', team_members: 5, support: 'Priority' },
    ],
    credit_packs: [
      { name: 'Starter', credits: 10, price: '$8' },
      { name: 'Growth', credits: 25, price: '$18' },
      { name: 'Pro Pack', credits: 50, price: '$32' },
    ],
    credit_logic: 'Under 15 min = 1 credit. 15–30 min = 2 credits. 30–60 min = 3 credits. 60–90 min = 4 credits. Credits never expire.',
    signup_url: 'https://app.tubescribed.com/signup',
  },
  features: {
    title: 'TubeScribed Features',
    url: 'https://www.tubescribed.com/features',
    core: [
      'YouTube URL → Clean Transcript (OpenAI Whisper, 95–98% accuracy)',
      'Brand Workspace Profiles (custom voice, tone, terminology)',
      'Branded SOP Generator',
      '15 Content Output Types',
      'Claude AI powered content generation',
      'Monthly Progress Reports',
      'Team collaboration (Agency plan)',
    ],
  },
  blog: {
    title: 'TubeScribed Blog',
    description: 'Guides on YouTube transcription, content repurposing, and AI content tools.',
    url: 'https://www.tubescribed.com/blog',
  },
  about: {
    title: 'About TubeScribed',
    description: 'TubeScribed is an AI-powered platform that turns any YouTube video into branded business content assets — transcripts, SOPs, blog posts, email sequences, and more.',
    url: 'https://www.tubescribed.com/about',
  },
  'use-cases': {
    title: 'Who TubeScribed Is For',
    avatars: ['Content Creators', 'Agencies', 'Business Coaches', 'Researchers', 'Educators', 'AI Builders', 'Podcasters', 'Course Creators'],
    url: 'https://www.tubescribed.com/for/content-creators',
  },
  tools: {
    title: 'Free YouTube Content Tools',
    description: '7 free tools that convert any YouTube URL into a specific content format.',
    url: 'https://www.tubescribed.com/tools',
    tools: [
      { name: 'YouTube Transcript Generator', url: '/tools/youtube-transcript-generator' },
      { name: 'YouTube to Blog Post', url: '/tools/youtube-to-blog-post' },
      { name: 'YouTube to SOP', url: '/tools/youtube-to-sop' },
      { name: 'YouTube to Email Sequence', url: '/tools/youtube-to-email-sequence' },
      { name: 'YouTube to Social Captions', url: '/tools/youtube-to-social-captions' },
      { name: 'YouTube to FAQ', url: '/tools/youtube-to-faq' },
      { name: 'Video to Training Guide', url: '/tools/video-to-training-guide' },
    ],
  },
  developers: {
    title: 'TubeScribed for Developers & AI Builders',
    description: 'Use TubeScribed transcripts as clean, structured input for custom GPTs, RAG pipelines, and AI agents.',
    url: 'https://www.tubescribed.com/developers',
  },
}

function getPageContent(args: { slug: string }) {
  const content = PAGE_CONTENT[args.slug.toLowerCase()]
  if (!content) {
    return {
      error: `Page "${args.slug}" not found.`,
      available_slugs: Object.keys(PAGE_CONTENT),
    }
  }
  return content
}

function listFeatures() {
  return {
    output_types: [
      { name: 'Transcript', description: 'Clean, punctuated, timestamped, filler-word-free.' },
      { name: 'Blog Post', description: 'SEO-optimized article with keyword H1, H2s, intro, FAQ, CTA.' },
      { name: 'SOP', description: 'Standard Operating Procedure with purpose, steps, warnings, checklist.' },
      { name: 'Email Sequence', description: '5-email nurture sequence with subject lines, preview text, CTAs.' },
      { name: 'Social Captions', description: 'Platform-native captions for LinkedIn, X, and Instagram.' },
      { name: 'FAQ Document', description: 'Featured-snippet-ready Q&A with FAQPage JSON-LD schema.' },
      { name: 'Training Guide', description: 'Learning objective, sections, knowledge check questions.' },
      { name: 'YouTube Description', description: 'Keyword-rich video description with chapters.' },
      { name: 'X Thread', description: '8–12 tweet thread with hook and numbered breakdown.' },
      { name: 'Newsletter Draft', description: 'LinkedIn Newsletter or email newsletter format.' },
      { name: 'Key Quotes', description: 'Pull quotes with timestamps for attribution.' },
      { name: 'Sales Script', description: 'Problem-agitate-solve script for DMs, calls, or VSLs.' },
      { name: 'Chapter Markers', description: 'Timestamped chapter list for YouTube descriptions.' },
    ],
    platform_features: [
      'OpenAI Whisper transcription (50+ languages, 95–98% accuracy on clear audio)',
      'Claude AI content generation with brand voice matching',
      'Brand Workspace: save voice, tone, audience, and terminology per client or brand',
      'Unlimited brand workspaces on Agency plan',
      'Videos up to 90 minutes supported',
      'Credit-based usage (scales with video length, shown before processing)',
      'Monthly progress reports',
      'Team collaboration: up to 5 members on Agency plan',
      'Download outputs as .txt instantly',
    ],
    integrations: [
      'Notion', 'Confluence', 'Google Docs', 'Teachable', 'Thinkific',
      'Any CMS via copy-paste', 'Any LMS via Markdown export',
    ],
  }
}

function getPricing() {
  return {
    plans: [
      {
        name: 'Free',
        price: '$0',
        transcripts_per_month: 1,
        outputs_per_month: 1,
        brand_workspaces: 0,
        team_members: 1,
        highlights: ['No credit card required', 'Full output quality', 'Test before buying'],
      },
      {
        name: 'Pro',
        price: '$19/month',
        transcripts_per_month: 30,
        outputs_per_month: 30,
        brand_workspaces: 3,
        team_members: 1,
        highlights: ['Best for solo creators and coaches', 'Email support'],
        signup_url: 'https://app.tubescribed.com/signup?plan=pro',
      },
      {
        name: 'Agency',
        price: '$49/month',
        transcripts_per_month: 100,
        outputs_per_month: 100,
        brand_workspaces: 'Unlimited',
        team_members: 5,
        highlights: ['Best for agencies with multiple clients', 'Priority support', 'Best value for longer content'],
        signup_url: 'https://app.tubescribed.com/signup?plan=agency',
      },
    ],
    credit_packs: {
      description: 'One-time purchases, never expire. Use for extra volume beyond monthly plan.',
      options: [
        { name: 'Starter', credits: 10, price: '$8', price_per_credit: '$0.80' },
        { name: 'Growth', credits: 25, price: '$18', price_per_credit: '$0.72' },
        { name: 'Pro Pack', credits: 50, price: '$32', price_per_credit: '$0.64' },
      ],
    },
    credit_usage_by_video_length: {
      'under_15_min': 1,
      '15_to_30_min': 2,
      '30_to_60_min': 3,
      '60_to_90_min': 4,
      'over_90_min': 'not_supported',
    },
    note: 'Credits are only deducted after successful processing. Failed jobs never consume credits.',
  }
}

function getUseCases() {
  return {
    primary_avatars: [
      {
        name: 'YouTube Content Creator',
        url: 'https://www.tubescribed.com/for/content-creators',
        problem: 'Records videos but spends 3–4 hours manually repurposing to blog, email, and social. Often skips it entirely.',
        solution: 'Every YouTube video automatically becomes a blog post, email sequence, and 3 social captions in under 2 minutes.',
        primary_outputs: ['Blog post', 'Email sequence', 'Social captions'],
        recommended_plan: 'Pro ($19/mo)',
      },
      {
        name: 'Agency',
        url: 'https://www.tubescribed.com/for/agencies',
        problem: 'Manages content for multiple clients with different brand voices, high volume, and tight turnarounds.',
        solution: 'Unlimited brand workspaces (one per client), 5 team members, 100 transcripts/month. Every output in the right brand voice automatically.',
        primary_outputs: ['All 15 output types', 'Branded SOPs', 'Client-ready content'],
        recommended_plan: 'Agency ($49/mo)',
      },
      {
        name: 'Business Coach',
        url: 'https://www.tubescribed.com/for/coaches',
        problem: 'Has valuable methodology in video form (coaching calls, training recordings) but no way to systematize or scale it.',
        solution: 'Convert coaching recordings into SOPs, training guides, and email sequences that deliver the methodology at scale.',
        primary_outputs: ['SOP', 'Training guide', 'Email sequence'],
        recommended_plan: 'Pro ($19/mo)',
      },
    ],
    additional_use_cases: [
      { name: 'Researchers & Journalists', url: 'https://www.tubescribed.com/for/researchers', use: 'Accurate, quotable, timestamped transcripts from interviews and conference talks.' },
      { name: 'Educators', url: 'https://www.tubescribed.com/for/educators', use: 'Convert YouTube lectures into study guides and course materials.' },
      { name: 'AI Builders', url: 'https://www.tubescribed.com/for/ai-builders', use: 'Clean structured transcripts as input for custom GPTs, RAG pipelines, and knowledge bases.' },
      { name: 'Podcasters', url: 'https://www.tubescribed.com/for/podcasters', use: 'Convert YouTube episode uploads into blog posts and show notes.' },
      { name: 'Course Creators', url: 'https://www.tubescribed.com/for/course-creators', use: 'Turn course videos into supporting written materials.' },
    ],
  }
}

async function submitEmail(args: { email: string; source?: string }) {
  if (!args.email || !args.email.includes('@')) {
    return { success: false, error: 'Invalid email address.' }
  }
  const apiKey = process.env.LOOPS_API_KEY
  if (!apiKey) return { success: false, error: 'Service unavailable.' }
  try {
    await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: args.email,
        source: args.source ?? 'mcp_agent',
        plan: 'lead',
        userGroup: 'lead',
        subscribed: true,
      }),
    })
    await fetch('https://app.loops.so/api/v1/events/send', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: args.email, eventName: 'marketing_site_signup' }),
    })
    return { success: true, message: 'Subscribed successfully.' }
  } catch {
    return { success: false, error: 'Subscription failed.' }
  }
}

// ─── Route handlers ───────────────────────────────────────────────────────────

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS })
}

export async function GET() {
  return NextResponse.json(MANIFEST, {
    headers: { ...CORS, 'Content-Type': 'application/json' },
  })
}

export async function POST(req: NextRequest) {
  let body: { tool?: string; arguments?: Record<string, unknown> }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON body.' },
      { status: 400, headers: CORS }
    )
  }

  const { tool, arguments: args = {} } = body

  if (!tool) {
    return NextResponse.json(
      { error: 'Missing required field: "tool".' },
      { status: 400, headers: CORS }
    )
  }

  let result: unknown

  switch (tool) {
    case 'get_page_content':
      result = getPageContent(args as { slug: string })
      break
    case 'list_features':
      result = listFeatures()
      break
    case 'get_pricing':
      result = getPricing()
      break
    case 'get_use_cases':
      result = getUseCases()
      break
    case 'submit_email':
      result = await submitEmail(args as { email: string; source?: string })
      break
    default:
      return NextResponse.json(
        {
          error: `Unknown tool: "${tool}".`,
          available_tools: MANIFEST.tools.map((t) => t.name),
        },
        { status: 400, headers: CORS }
      )
  }

  return NextResponse.json(
    { tool, result },
    { headers: { ...CORS, 'Content-Type': 'application/json' } }
  )
}
