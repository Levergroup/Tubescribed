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
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF3B30] to-[#FF8C42] flex items-center justify-center text-white font-bold text-sm">
            {post.author.charAt(0)}
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
