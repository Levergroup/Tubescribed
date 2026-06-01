import Link from 'next/link';
import { BlogPost } from '@/lib/mdx';

export default function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="bg-gray-50 border-t border-gray-200 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Keep Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-gray-300 transition-all"
            >
              <span className="text-xs text-[#FF3B30] font-semibold uppercase tracking-wide">{post.category}</span>
              <h3 className="text-gray-900 font-semibold mt-2 mb-2 group-hover:text-[#FF3B30] transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm line-clamp-2">{post.excerpt}</p>
              <p className="text-[#FF3B30] text-sm mt-4 font-medium">Read more →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
