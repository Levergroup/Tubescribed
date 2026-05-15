import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPostSlugs, getPostBySlug, getRelatedPosts } from '@/lib/mdx';
import BlogHeader from '@/components/BlogHeader';
import BlogCTA from '@/components/BlogCTA';
import TableOfContents from '@/components/TableOfContents';
import RelatedPosts from '@/components/RelatedPosts';
import AuthorCard from '@/components/AuthorCard';
import FAQSection from '@/components/FAQSection';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = getPostBySlug(params.slug);
    return {
      title: post.title,
      description: post.meta_description,
      alternates: { canonical: `https://tubescribed.com/blog/${params.slug}` },
      openGraph: {
        title: post.title,
        description: post.meta_description,
        url: `https://tubescribed.com/blog/${params.slug}`,
        siteName: 'TubeScribed',
        images: [{ url: post.featured_image, alt: post.featured_image_alt }],
        type: 'article',
        publishedTime: post.date,
        authors: [post.author],
        tags: post.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.meta_description,
        images: [post.featured_image],
      },
    };
  } catch {
    return { title: 'Article Not Found' };
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
const components = {
  h2: ({ children }: any) => (
    <h2 className="text-2xl font-bold text-white mt-12 mb-4 scroll-mt-20">{children}</h2>
  ),
  h3: ({ children }: any) => (
    <h3 className="text-xl font-semibold text-white mt-8 mb-3 scroll-mt-20">{children}</h3>
  ),
  p: ({ children }: any) => (
    <p className="text-[#94A3B8] leading-relaxed mb-4">{children}</p>
  ),
  a: ({ href, children }: any) => (
    <a href={href} className="text-[#FF3B30] hover:text-[#FF8C42] underline transition-colors">
      {children}
    </a>
  ),
  ul: ({ children }: any) => <ul className="list-none space-y-2 mb-6">{children}</ul>,
  li: ({ children }: any) => (
    <li className="flex items-start gap-2 text-[#94A3B8]">
      <span className="text-[#FF3B30] mt-1 flex-shrink-0">→</span>
      <span>{children}</span>
    </li>
  ),
  ol: ({ children }: any) => (
    <ol className="list-decimal list-inside space-y-2 mb-6 text-[#94A3B8]">{children}</ol>
  ),
  blockquote: ({ children }: any) => (
    <blockquote className="border-l-4 border-[#FF3B30] pl-4 my-6 bg-[#243447] py-4 pr-4 rounded-r-lg">
      {children}
    </blockquote>
  ),
  table: ({ children }: any) => (
    <div className="overflow-x-auto mb-6">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  th: ({ children }: any) => (
    <th className="bg-[#243447] text-white font-semibold px-4 py-3 text-left border border-[#2D3F55]">
      {children}
    </th>
  ),
  td: ({ children }: any) => (
    <td className="px-4 py-3 text-[#94A3B8] border border-[#2D3F55]">{children}</td>
  ),
  code: ({ children }: any) => (
    <code className="bg-[#243447] text-[#FF8C42] px-2 py-0.5 rounded text-sm font-mono">
      {children}
    </code>
  ),
  pre: ({ children }: any) => (
    <pre className="bg-[#243447] border border-[#2D3F55] rounded-lg p-4 overflow-x-auto mb-6 text-sm">
      {children}
    </pre>
  ),
  hr: () => <hr className="border-[#2D3F55] my-8" />,
  BlogCTA: ({ variant }: { variant?: 'default' | 'final' }) => <BlogCTA variant={variant} />,
};
/* eslint-enable @typescript-eslint/no-explicit-any */

export default function BlogPostPage({ params }: Props) {
  let post;
  try {
    post = getPostBySlug(params.slug);
  } catch {
    notFound();
  }

  const relatedPosts = getRelatedPosts(params.slug, post.related_posts);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.meta_description,
    image: post.featured_image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.author_title,
    },
    publisher: {
      '@type': 'Organization',
      name: 'TubeScribed',
      logo: { '@type': 'ImageObject', url: 'https://tubescribed.com/logo.png' },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://tubescribed.com/blog/${params.slug}`,
    },
  };

  const faqSchema =
    post.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: post.faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <main className="min-h-screen bg-[#1E2A3A]">
        <BlogHeader post={post} />

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
            <article className="min-w-0">
              <BlogCTA />
              <div className="prose prose-invert max-w-none">
                <MDXRemote source={post.content} components={components} />
              </div>
              {post.faq.length > 0 && <FAQSection faqs={post.faq} />}
              <AuthorCard author={post.author} authorTitle={post.author_title} />
              <BlogCTA variant="final" />
            </article>

            <aside className="hidden lg:block">
              <div className="sticky top-8 space-y-6">
                <TableOfContents content={post.content} />
                <div className="bg-[#243447] border border-[#2D3F55] rounded-xl p-6">
                  <p className="text-white font-semibold mb-2">Try TubeScribed Free</p>
                  <p className="text-[#94A3B8] text-sm mb-4">
                    1 free transcript + 1 free output. No credit card needed.
                  </p>
                  <a
                    href="https://app.tubescribed.com/signup"
                    className="block w-full text-center py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#FF3B30] to-[#FF8C42] hover:opacity-90 transition-opacity text-sm"
                  >
                    Start Free →
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}
      </main>
    </>
  );
}
