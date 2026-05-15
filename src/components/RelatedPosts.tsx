import Link from 'next/link';
import { BlogPost } from '@/lib/mdx';

export default function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="bg-[#243447] border-t border-[#2D3F55] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">Keep Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-[#1E2A3A] border border-[#2D3F55] rounded-xl p-6 hover:border-[#FF3B30]/50 transition-all"
            >
              <span className="text-xs text-[#FF3B30] font-medium">{post.category}</span>
              <h3 className="text-white font-semibold mt-2 mb-2 group-hover:text-[#FF8C42] transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-[#94A3B8] text-sm line-clamp-2">{post.excerpt}</p>
              <p className="text-[#FF3B30] text-sm mt-4 font-medium">Read more →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
