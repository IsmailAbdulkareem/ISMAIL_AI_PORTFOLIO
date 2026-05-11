import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { getPostBySlug, getAllPosts } from '@/sanity/client'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post: any) => ({
    slug: post.slug.current,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    keywords: post.seo?.keywords || [],
  }
}

export const revalidate = 60

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gray-900 py-20">
      <article className="container-max max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
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

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {post.title}
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            {post.excerpt}
          </p>

          {post.mainImage && (
            <div className="mt-8 rounded-lg overflow-hidden">
              <img
                src={post.mainImage}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          )}
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <PortableText
            value={post.body}
            components={{
              block: {
                h1: ({ children }) => (
                  <h1 className="text-4xl font-bold text-white mb-6 mt-12">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-3xl font-bold text-white mb-6 mt-12">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl font-bold text-white mb-4 mt-8">{children}</h3>
                ),
                h4: ({ children }) => (
                  <h4 className="text-xl font-bold text-white mb-4 mt-6">{children}</h4>
                ),
                normal: ({ children }) => (
                  <p className="text-gray-300 leading-relaxed mb-6">{children}</p>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-6 italic text-gray-400">
                    {children}
                  </blockquote>
                ),
              },
              marks: {
                strong: ({ children }) => (
                  <strong className="text-white font-semibold">{children}</strong>
                ),
                em: ({ children }) => (
                  <em className="text-blue-300">{children}</em>
                ),
                code: ({ children }) => (
                  <code className="bg-gray-800 text-blue-300 px-2 py-1 rounded text-sm">
                    {children}
                  </code>
                ),
                link: ({ children, value }) => (
                  <a
                    href={value?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    {children}
                  </a>
                ),
              },
              types: {
                image: ({ value }) => (
                  <div className="my-8 rounded-lg overflow-hidden">
                    <img
                      src={value.asset.url}
                      alt={value.alt || ''}
                      className="w-full h-auto"
                    />
                  </div>
                ),
                code: ({ value }) => (
                  <pre className="bg-gray-800 rounded-lg p-4 overflow-x-auto my-6">
                    <code className="text-sm text-gray-300">{value.code}</code>
                  </pre>
                ),
              },
            }}
          />
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg p-8 border border-blue-500/30 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-gray-300 mb-6">
            Get a free consultation and see how AI solutions can help you automate and grow.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            Get Free Consultation
          </Link>
        </div>
      </article>
    </main>
  )
}
