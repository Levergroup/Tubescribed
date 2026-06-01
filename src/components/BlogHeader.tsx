import { BlogPost } from '@/lib/mdx';
import BlogThumbnail from '@/components/BlogThumbnail';

export default function BlogHeader({ post }: { post: BlogPost }) {
  return (
    <header className="bg-gray-50 border-b border-gray-200 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FF3B30] text-white uppercase tracking-wide">
            {post.category}
          </span>
          <span className="text-gray-500 text-sm">{post.reading_time}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {post.title}
        </h1>
        <p className="text-gray-600 text-lg mb-6 max-w-2xl">{post.excerpt}</p>
        <div className="flex items-center gap-3 pt-5 border-t border-gray-200">
          <div className="w-9 h-9 rounded-full bg-[#1E2A3A] flex items-center justify-center flex-shrink-0">
            <svg width="22" height="22" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <mask id="ts-bh">
                <rect width="40" height="40" fill="white" />
                <path d="M10.5 30 C14.5 28.5 17.5 27.3 21 26.8 C24 26.3 26.5 24.6 29.8 23.6 C31.6 23.1 32.2 24.6 30.8 25.6 C27.8 27.6 24.5 26.6 21 27.6 C17 28.7 14 30 10.5 30 Z" fill="black" />
              </mask>
              <path d="M9.9 10.2 Q9.9 6.8 12.78 8.61 L31.82 20.59 Q34.7 22.4 31.74 24.08 L12.86 34.82 Q9.9 36.5 9.9 33.1 Z" fill="#FF3B30" mask="url(#ts-bh)" />
            </svg>
          </div>
          <div>
            <p className="text-gray-900 text-sm font-medium">{post.author}</p>
            <p className="text-gray-500 text-xs">
              {post.author_title} ·{' '}
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          </div>
        </div>
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded text-xs text-gray-500 bg-white border border-gray-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
        {/* Featured image */}
        <div className="mt-8 rounded-xl overflow-hidden border border-gray-200 aspect-video">
          <BlogThumbnail slug={post.slug} category={post.category} />
        </div>
      </div>
    </header>
  );
}
