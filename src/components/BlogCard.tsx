import Link from 'next/link';
import { BlogPost } from '@/lib/mdx';
import BlogThumbnail from '@/components/BlogThumbnail';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="h-full bg-[#243447] border border-[#2D3F55] rounded-xl overflow-hidden hover:border-[#FF3B30]/50 transition-all duration-200 hover:-translate-y-1">
        <div className="aspect-video bg-[#1E2A3A] relative overflow-hidden">
          <BlogThumbnail slug={post.slug} category={post.category} />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-[#FF3B30]/10 text-[#FF3B30] border border-[#FF3B30]/20">
              {post.category}
            </span>
            <span className="text-[#94A3B8] text-xs">{post.reading_time}</span>
          </div>
          <h2 className="text-white font-semibold text-lg mb-2 group-hover:text-[#FF8C42] transition-colors line-clamp-2">
            {post.title}
          </h2>
          <p className="text-[#94A3B8] text-sm line-clamp-3 mb-4">{post.excerpt}</p>
          <div className="flex items-center justify-between pt-4 border-t border-[#2D3F55]">
            <span className="text-[#94A3B8] text-xs">{post.author}</span>
            <span className="text-[#94A3B8] text-xs">
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
