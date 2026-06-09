import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
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
import MidArticleCTA from '@/components/MidArticleCTA';

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
      <h2 id={id} className="text-gray-900 text-2xl font-bold mt-12 mb-4 pb-2 border-b border-gray-200 scroll-mt-24">
        {children}
      </h2>
    );
  },
  h3: ({ children }: NodeProps) => (
    <h3 className="text-gray-900 text-xl font-semibold mt-8 mb-3 scroll-mt-24">{children}</h3>
  ),
  p: ({ children }: NodeProps) => (
    <p className="text-gray-700 leading-7 mb-5 text-base">{children}</p>
  ),
  a: ({ href, children }: AnchorProps) => (
    <a href={href} className="text-[#FF3B30] hover:text-[#E63528] underline underline-offset-2 transition-colors">
      {children}
    </a>
  ),
  strong: ({ children }: NodeProps) => (
    <strong className="text-gray-900 font-semibold">{children}</strong>
  ),
  ul: ({ children }: NodeProps) => (
    <ul className="space-y-2 my-5 ml-4">{children}</ul>
  ),
  li: ({ children }: NodeProps) => (
    <li className="text-gray-700 leading-7 flex items-start gap-2">
      <span className="text-[#FF3B30] flex-shrink-0 mt-0.5">→</span>
      <span>{children}</span>
    </li>
  ),
  ol: ({ children }: NodeProps) => (
    <ol className="list-decimal list-outside space-y-2 my-5 ml-6 text-gray-700">{children}</ol>
  ),
  blockquote: ({ children }: NodeProps) => (
    <blockquote className="border-l-4 border-[#FF3B30] bg-gray-50 rounded-r-lg px-5 py-4 my-6 text-gray-700 italic">
      {children}
    </blockquote>
  ),
  table: ({ children }: NodeProps) => (
    <div className="overflow-x-auto my-8 rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }: NodeProps) => (
    <thead className="bg-gray-50">{children}</thead>
  ),
  tbody: ({ children }: NodeProps) => (
    <tbody className="divide-y divide-gray-100">{children}</tbody>
  ),
  tr: ({ children }: NodeProps) => (
    <tr className="hover:bg-gray-50 transition-colors">{children}</tr>
  ),
  th: ({ children }: NodeProps) => (
    <th className="px-4 py-3 text-left font-semibold text-gray-900 text-xs uppercase tracking-wider border-b border-gray-200 whitespace-nowrap bg-gray-50">
      {children}
    </th>
  ),
  td: ({ children }: NodeProps) => (
    <td className="px-4 py-3 text-gray-700 align-middle border-r border-gray-100 last:border-r-0">
      {children}
    </td>
  ),
  code: ({ children }: NodeProps) => (
    <code className="bg-gray-100 text-[#FF3B30] px-1.5 py-0.5 rounded text-sm font-mono">
      {children}
    </code>
  ),
  pre: ({ children }: NodeProps) => (
    <pre className="bg-gray-100 border border-gray-200 rounded-lg p-4 overflow-x-auto mb-6 text-sm">
      {children}
    </pre>
  ),
  hr: () => <hr className="border-gray-200 my-10" />,
  img: ({ src, alt }: ImgProps) => (
    <figure className="my-8">
      <img
        src={src}
        alt={alt}
        className="w-full rounded-xl border border-gray-200"
        loading="lazy"
        width={1200}
        height={630}
      />
      {alt && (
        <figcaption className="text-center text-gray-400 text-sm mt-2">{alt}</figcaption>
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
      <MidArticleCTA />
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

      <main className="min-h-screen bg-white">
        <BlogHeader post={post} />

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
            <article className="min-w-0">
              <InlineTOC content={post.content} />
              <div className="max-w-[680px]">
                <div className="prose max-w-none">
                  <MDXRemote source={post.content} components={components} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
                </div>
                {/* Free tools callout */}
                <div className="bg-gray-50 rounded-xl p-6 my-8 border border-gray-200">
                  <p className="font-semibold text-gray-900 mb-3">Free tools to try:</p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    <a href="/tools/youtube-transcript-generator" className="text-[#FF3B30] text-sm hover:underline">YouTube Transcript Generator →</a>
                    <a href="/tools/youtube-to-blog-post" className="text-[#FF3B30] text-sm hover:underline">YouTube to Blog Post →</a>
                    <a href="/tools/youtube-to-sop" className="text-[#FF3B30] text-sm hover:underline">YouTube to SOP →</a>
                  </div>
                </div>
                {post.faq.length > 0 && <FAQSection faqs={post.faq} />}
                <AuthorCard author={post.author} authorTitle={post.author_title} />
                <BlogCTA variant="final" />
              </div>
            </article>

            <aside className="hidden lg:block">
              <div className="sticky top-8 space-y-6">
                <TableOfContents content={post.content} />
                <div className="bg-[#1E2A3A] rounded-xl p-6">
                  <p className="text-white font-semibold mb-2">Try TubeScribed Free</p>
                  <p className="text-gray-300 text-sm mb-4">
                    1 free transcript + 1 free output. No credit card needed.
                  </p>
                  <a
                    href="https://app.tubescribed.com/signup"
                    className="block w-full text-center py-3 rounded-lg font-semibold text-white bg-[#FF3B30] hover:bg-[#E63528] transition-colors text-sm"
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
