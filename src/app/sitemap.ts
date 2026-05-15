import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const blogRoutes = posts.map((post) => ({
    url: `https://tubescribed.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    { url: 'https://tubescribed.com', lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: 'https://tubescribed.com/pricing', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://tubescribed.com/blog', lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: 'https://tubescribed.com/for/content-creators', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://tubescribed.com/for/agencies', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://tubescribed.com/for/coaches', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://tubescribed.com/for/ai-builders', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://tubescribed.com/vs/chatgpt', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://tubescribed.com/vs/otter-ai', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://tubescribed.com/vs/tactiq', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://tubescribed.com/vs/notegpt', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://tubescribed.com/vs/descript', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://tubescribed.com/features/sop-generator', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://tubescribed.com/features/brand-workspace', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://tubescribed.com/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://tubescribed.com/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: 'https://tubescribed.com/privacy-policy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://tubescribed.com/terms-of-service', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    ...blogRoutes,
  ];
}
