'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'

type Post = {
  _id: string
  title: string
  excerpt: string
  slug: { current: string }
  category: string
  publishedAt: string
  readTime: number
  mainImage?: string
}

type BlogPreviewProps = {
  posts: Post[]
}

const BlogPreview = ({ posts }: BlogPreviewProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="blog-preview" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-900" />

      {/* Content */}
      <div className="container-max relative z-20 px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold text-center mb-4 text-white"
          >
            Latest Insights
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-xl"
          >
            Expert insights on AI chatbots, automation, and web development
          </motion.p>

          {/* Blog Posts */}
          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {posts.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-400 text-lg mb-4">
                  No blog posts yet. Visit <Link href="/studio" className="text-blue-400 hover:text-blue-300 underline">/studio</Link> to create your first post!
                </p>
              </div>
            ) : (
              posts.map((post, index) => (
                <motion.div
                  key={post._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Link href={`/blog/${post.slug.current}`}>
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 h-full group">
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                        <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30 text-xs">
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
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1 text-gray-500 text-xs">
                          <Clock size={14} />
                          {post.readTime} min read
                        </span>
                        <div className="flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-3 transition-all text-sm">
                          Read More
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))
            )}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <Link href="/blog">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300 inline-flex items-center gap-2"
              >
                Read All Articles
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogPreview
