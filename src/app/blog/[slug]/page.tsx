import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPostSlugs, getPostBySlug, getRelatedPosts } from '@/lib/mdx';
import BlogHeader from '@/components/BlogHeader';
import BlogCTA from '@/components/BlogCTA';
import TableOfContents from '@/components/TableOfContents';
import InlineTOC from '@/components/InlineTOC';
import RelatedPosts from '@/components/RelatedPosts';
import AuthorCard from '@/components/AuthorCard';
import FAQSection from '@/components/FAQSection';
import NextStepsBlockComponent from '@/components/NextStepsBlock';
import ReadingProgress from '@/components/ReadingProgress';

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
      alternates: { canonical: `https://www.tubescribed.com/blog/${params.slug}` },
      openGraph: {
        title: post.title,
        description: post.meta_description,
        url: `https://www.tubescribed.com/blog/${params.slug}`,
        siteName: 'TubeScribed',
        type: 'article',
        publishedTime: post.date,
        authors: [post.author],
        tags: post.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.meta_description,
      },
    };
  } catch {
    return { title: 'Article Not Found' };
  }
}

type NodeProps = { children?: React.ReactNode };
type AnchorProps = { href?: string; children?: React.ReactNode };
type ImgProps = { src?: string; alt?: string };

const components = {
  h2: ({ children }: NodeProps) => {
    const text = typeof children === 'string' ? children : '';
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return (
      <h2 id={id} className="text-white text-xl font-bold mt-12 mb-4 pb-2 border-b border-[#2D3F55] scroll-mt-24">
        {children}
      </h2>
    );
  },
  h3: ({ children }: NodeProps) => (
    <h3 className="text-[#FF8C42] text-lg font-semibold mt-8 mb-3 scroll-mt-24">{children}</h3>
  ),
  p: ({ children }: NodeProps) => (
    <p className="text-[#94A3B8] leading-7 mb-5 text-base">{children}</p>
  ),
  a: ({ href, children }: AnchorProps) => (
    <a href={href} className="text-[#FF3B30] hover:text-[#FF8C42] underline transition-colors">
      {children}
    </a>
  ),
  strong: ({ children }: NodeProps) => (
    <strong className="text-white font-semibold">{children}</strong>
  ),
  ul: ({ children }: NodeProps) => (
    <ul className="space-y-2 my-5 ml-4">{children}</ul>
  ),
  li: ({ children }: NodeProps) => (
    <li className="text-[#94A3B8] leading-7 flex items-start gap-2">
      <span className="text-[#FF3B30] flex-shrink-0 mt-0.5">→</span>
      <span>{children}</span>
    </li>
  ),
  ol: ({ children }: NodeProps) => (
    <ol className="list-decimal list-outside space-y-2 my-5 ml-6 text-[#94A3B8]">{children}</ol>
  ),
  blockquote: ({ children }: NodeProps) => (
    <blockquote className="border-l-4 border-[#FF3B30] bg-[#243447] rounded-r-xl px-5 py-4 my-6 text-[#CBD5E1] italic">
      {children}
    </blockquote>
  ),
  table: ({ children }: NodeProps) => (
    <div className="overflow-x-auto my-8 rounded-xl border border-[#2D3F55]">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }: NodeProps) => (
    <thead className="bg-[#1a2535]">{children}</thead>
  ),
  tbody: ({ children }: NodeProps) => (
    <tbody className="divide-y divide-[#2D3F55]">{children}</tbody>
  ),
  tr: ({ children }: NodeProps) => (
    <tr className="hover:bg-[#1a2535] transition-colors">{children}</tr>
  ),
  th: ({ children }: NodeProps) => (
    <th className="px-4 py-3 text-left font-semibold text-white text-xs uppercase tracking-wider border-b border-[#2D3F55] whitespace-nowrap">
      {children}
    </th>
  ),
  td: ({ children }: NodeProps) => (
    <td className="px-4 py-3 text-[#CBD5E1] align-middle border-r border-[#2D3F55] last:border-r-0">
      {children}
    </td>
  ),
  code: ({ children }: NodeProps) => (
    <code className="bg-[#243447] text-[#FF8C42] px-1.5 py-0.5 rounded text-sm font-mono">
      {children}
    </code>
  ),
  pre: ({ children }: NodeProps) => (
    <pre className="bg-[#243447] border border-[#2D3F55] rounded-lg p-4 overflow-x-auto mb-6 text-sm">
      {children}
    </pre>
  ),
  hr: () => <hr className="border-[#2D3F55] my-10" />,
  img: ({ src, alt }: ImgProps) => (
    <figure className="my-8">
      <img
        src={src}
        alt={alt}
        className="w-full rounded-xl border border-[#2D3F55]"
        loading="lazy"
        width={1200}
        height={630}
      />
      {alt && (
        <figcaption className="text-center text-[#94A3B8] text-sm mt-2">{alt}</figcaption>
      )}
    </figure>
  ),
  BlogCTA: ({ variant }: { variant?: 'default' | 'final' }) => <BlogCTA variant={variant} />,
  NextStepsBlock: NextStepsBlockComponent,
};

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
      logo: { '@type': 'ImageObject', url: 'https://www.tubescribed.com/logo.png' },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.tubescribed.com/blog/${params.slug}`,
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
      <ReadingProgress />
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
              <InlineTOC content={post.content} />
              <div className="max-w-[680px]">
                <div className="prose prose-invert max-w-none">
                  <MDXRemote source={post.content} components={components} />
                </div>
                {post.faq.length > 0 && <FAQSection faqs={post.faq} />}
                <AuthorCard author={post.author} authorTitle={post.author_title} />
                <BlogCTA variant="final" />
              </div>
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
