import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  meta_description: string;
  date: string;
  author: string;
  author_title: string;
  category: string;
  tags: string[];
  reading_time: string;
  featured_image: string;
  featured_image_alt: string;
  excerpt: string;
  content: string;
  related_posts: string[];
  faq: Array<{ question: string; answer: string }>;
}

export function getAllPostSlugs(): string[] {
  const files = fs.readdirSync(BLOG_DIR);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace('.mdx', ''));
}

export function getPostBySlug(slug: string): BlogPost {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  const stats = readingTime(content);

  const rawDate = data.date;
  const date =
    rawDate instanceof Date
      ? rawDate.toISOString().split('T')[0]
      : String(rawDate);

  return {
    slug,
    title: data.title,
    meta_description: data.meta_description,
    date,
    author: data.author || 'TubeScribed Team',
    author_title: data.author_title || 'Content Team',
    category: data.category || 'Content Strategy',
    tags: data.tags || [],
    reading_time: stats.text,
    featured_image: data.featured_image || '/images/blog/default-og.png',
    featured_image_alt: data.featured_image_alt || data.title,
    excerpt: data.excerpt || content.slice(0, 160),
    content,
    related_posts: data.related_posts || [],
    faq: data.faq || [],
  };
}

export function getAllPosts(): BlogPost[] {
  const slugs = getAllPostSlugs();
  return slugs
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getRelatedPosts(
  currentSlug: string,
  relatedSlugs: string[]
): BlogPost[] {
  return relatedSlugs
    .filter((slug) => slug !== currentSlug)
    .map((slug) => {
      try {
        return getPostBySlug(slug);
      } catch {
        return null;
      }
    })
    .filter(Boolean) as BlogPost[];
}
