import { BlogPost } from '@/lib/mdx';

export default function BlogHeader({ post }: { post: BlogPost }) {
  return (
    <header className="bg-[#1E2A3A] border-b border-[#2D3F55] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FF3B30]/10 text-[#FF3B30] border border-[#FF3B30]/20">
            {post.category}
          </span>
          <span className="text-[#94A3B8] text-sm">{post.reading_time}</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          {post.title}
        </h1>
        <p className="text-[#94A3B8] text-lg mb-8 max-w-3xl">{post.excerpt}</p>
        <div className="flex items-center gap-4 pt-6 border-t border-[#2D3F55]">
          <div className="w-10 h-10 rounded-full bg-[#0D1829] flex items-center justify-center flex-shrink-0">
            <svg width="26" height="26" viewBox="0 0 36 36" fill="none" aria-hidden="true">
              <path d="M8 4.5C5.5 4.5 5 6.5 5 8V28C5 30 5.5 31.5 8 31.5C9.5 31.5 10.5 31 32 19.5C33.5 18.8 34 18.4 34 18C34 17.6 33.5 17.2 32 16.5C10.5 5 9.5 4.5 8 4.5Z" fill="#FF3B30"/>
              <path d="M5 21C8.5 19.5 15 18 23 19C28.5 19.7 31.5 19.3 34.5 18.7V20.5C31.5 21.1 28.5 21.5 23 20.8C15 19.8 8.5 21.3 5 22.8Z" fill="#0D1829"/>
            </svg>
          </div>
          <div>
            <p className="text-white text-sm font-medium">{post.author}</p>
            <p className="text-[#94A3B8] text-xs">
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
          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded text-xs text-[#94A3B8] bg-[#243447] border border-[#2D3F55]"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
