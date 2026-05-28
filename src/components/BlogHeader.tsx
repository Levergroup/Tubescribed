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
              <path d="M8 4C5 4 4.5 6.5 4.5 8L4.5 28C4.5 29.5 5 32 8 32C10 32 11 31.3 32 19.8C33.5 19 34.5 18.5 34.5 18C34.5 17.5 33.5 17 32 16.2C11 4.7 10 4 8 4Z" fill="#FF3B30"/>
              <path d="M1.5 22.5C7 19.5 14 18 21.5 19.5C27 20.5 31 19.8 34 19C33 20.5 30 22.8 22 22C14 21.2 7 24 1.5 26C1 24.5 1 23 1.5 22.5Z" fill="#0D1829"/>
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
