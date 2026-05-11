import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { getAllPosts } from '@/sanity/client'

export const metadata: Metadata = {
  title: 'AI Development Blog | AI Chatbot & Web Development Tips in Pakistan',
  description: 'Learn about AI chatbot development, AI-powered websites, WhatsApp automation, and web development best practices. Expert insights from Karachi, Pakistan.',
  keywords: [
    'AI chatbot blog',
    'AI development Pakistan',
    'chatbot development tips',
    'AI website development',
    'WhatsApp chatbot guide',
    'web development Pakistan'
  ]
}

export const revalidate = 60 // Revalidate every 60 seconds

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <main className="min-h-screen bg-gray-900 py-20">
      <div className="container-max">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            AI Development Blog
          </h1>
          <p className="text-xl text-gray-300">
            Expert insights on AI chatbots, automation, and web development
          </p>
        </div>

        {/* Blog Posts */}
        {posts.length === 0 ? (
          <div className="max-w-2xl mx-auto text-center py-20">
            <p className="text-gray-400 text-lg mb-6">
              No blog posts yet. Visit <Link href="/studio" className="text-blue-400 hover:text-blue-300 underline">/studio</Link> to create your first post!
            </p>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto space-y-8">
            {posts.map((post: any) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="block bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  {post.mainImage && (
                    <div className="w-48 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                      <img
                        src={post.mainImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  <div className="flex-1">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime} min read
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-gray-300 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-3 transition-all">
                      Read Full Article
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="max-w-4xl mx-auto mt-16 text-center bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg p-8 border border-blue-500/30">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need AI Solutions for Your Business?
          </h2>
          <p className="text-gray-300 mb-6">
            Get a free consultation and learn how AI chatbots and intelligent websites can transform your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            Get Free Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </main>
  )
}
