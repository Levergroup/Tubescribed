import Link from 'next/link';
import { BlogPost } from '@/lib/mdx';
import BlogThumbnail from '@/components/BlogThumbnail';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="h-full bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md hover:border-gray-300 transition-all duration-200">
        <div className="aspect-video bg-gray-50 relative overflow-hidden">
          <BlogThumbnail slug={post.slug} category={post.category} />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-[#FF3B30] text-white">
              {post.category}
            </span>
            <span className="text-gray-400 text-xs">{post.reading_time}</span>
          </div>
          <h2 className="text-gray-900 font-semibold text-lg mb-2 group-hover:text-[#FF3B30] transition-colors line-clamp-2">
            {post.title}
          </h2>
          <p className="text-gray-500 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <span className="text-gray-400 text-xs">{post.author}</span>
            <span className="text-gray-400 text-xs">
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
