import { getFeaturedPosts } from '@/sanity/client'
import BlogPreview from './BlogPreview'

export default async function BlogPreviewWrapper() {
  const posts = await getFeaturedPosts(3)
  return <BlogPreview posts={posts} />
}
