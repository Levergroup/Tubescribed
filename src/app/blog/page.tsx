import { Metadata } from 'next';
import { getAllPosts } from '@/lib/mdx';
import BlogCard from '@/components/BlogCard';

export const metadata: Metadata = {
  title: 'TubeScribed Blog — YouTube Transcription, Content Repurposing & AI Tips',
  description:
    'Learn how to repurpose YouTube videos into blog posts, SOPs, email sequences, and more. Strategies for creators, agencies, and coaches.',
  alternates: { canonical: 'https://tubescribed.com/blog' },
  openGraph: {
    title: 'TubeScribed Blog',
    description: 'YouTube transcription, content repurposing, and AI workflow tips.',
    url: 'https://tubescribed.com/blog',
    siteName: 'TubeScribed',
    images: [{ url: 'https://tubescribed.com/og-default.png' }],
    type: 'website',
  },
};

const CATEGORIES = ['All', 'Content Strategy', 'AI Tools', 'Tutorials', 'Agency Tips', 'Comparisons'];

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#FF3B30] text-white mb-4">
            TubeScribed Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Turn Video Content Into Business Assets
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Strategies, workflows, and AI tools for creators, agencies, and coaches who want to get
            more from every video they make.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 rounded-full text-sm font-medium border border-gray-200 text-gray-500 hover:border-[#FF3B30] hover:text-[#FF3B30] transition-all"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">Articles coming soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Email Capture — dark accent section for contrast */}
      <section className="py-16 px-4 bg-[#1E2A3A]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            Get Weekly Content Repurposing Tips
          </h2>
          <p className="text-gray-300 mb-6">One email per week. No fluff. Just workflows that work.</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#FF3B30]"
            />
            <button className="px-6 py-3 rounded-lg font-semibold text-white bg-[#FF3B30] hover:bg-[#E63528] transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
