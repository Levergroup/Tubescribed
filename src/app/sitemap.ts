import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const blogRoutes = posts.map((post) => ({
    url: `https://www.tubescribed.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    { url: 'https://www.tubescribed.com', lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: 'https://www.tubescribed.com/pricing', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.tubescribed.com/blog', lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },

    // Features
    { url: 'https://www.tubescribed.com/features', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.tubescribed.com/features/sop-generator', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.tubescribed.com/features/brand-workspace', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.tubescribed.com/features/ai-transcript-cleaner', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.tubescribed.com/features/content-repurposing', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.tubescribed.com/features/youtube-transcription', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.tubescribed.com/features/progress-reports', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },

    // For (use cases)
    { url: 'https://www.tubescribed.com/for/content-creators', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.tubescribed.com/for/agencies', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.tubescribed.com/for/coaches', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.tubescribed.com/for/ai-builders', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.tubescribed.com/for/podcasters', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.tubescribed.com/for/course-creators', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.tubescribed.com/for/automation-builders', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.tubescribed.com/for/enterprise', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.tubescribed.com/for/seo-agencies', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.tubescribed.com/for/researchers', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },

    // Vs (competitors)
    { url: 'https://www.tubescribed.com/vs/chatgpt', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.tubescribed.com/vs/otter-ai', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.tubescribed.com/vs/tactiq', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.tubescribed.com/vs/notegpt', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.tubescribed.com/vs/descript', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.tubescribed.com/vs/youtube-captions', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },

    // Alternatives
    { url: 'https://www.tubescribed.com/alternatives/descript', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.tubescribed.com/alternatives/otter-ai', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.tubescribed.com/alternatives/tactiq', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },

    // Free tools
    { url: 'https://www.tubescribed.com/free-tools/youtube-transcript-generator', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },

    // Developer
    { url: 'https://www.tubescribed.com/developers', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },

    // Company
    { url: 'https://www.tubescribed.com/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://www.tubescribed.com/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: 'https://www.tubescribed.com/changelog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.5 },
    { url: 'https://www.tubescribed.com/affiliate', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: 'https://www.tubescribed.com/roi-calculator', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },

    // Compliance / legal
    { url: 'https://www.tubescribed.com/disclaimer', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://www.tubescribed.com/privacy-policy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://www.tubescribed.com/terms-of-service', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://www.tubescribed.com/cookie-policy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://www.tubescribed.com/acceptable-use', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://www.tubescribed.com/gdpr', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://www.tubescribed.com/refund-policy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },

    ...blogRoutes,

    // AI/LLM discovery files
    { url: 'https://www.tubescribed.com/llms.txt', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.5 },
    { url: 'https://www.tubescribed.com/llms-full.txt', lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.5 },
  ];
}
