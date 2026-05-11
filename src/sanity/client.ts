import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

// Helper function to get all blog posts
export async function getAllPosts() {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      "mainImage": mainImage.asset->url,
      category,
      publishedAt,
      readTime,
      featured
    }`
  )
}

// Helper function to get a single blog post by slug
export async function getPostBySlug(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      "mainImage": mainImage.asset->url,
      category,
      publishedAt,
      readTime,
      body,
      seo,
      featured
    }`,
    { slug }
  )
}

// Helper function to get featured posts for homepage
export async function getFeaturedPosts(limit = 3) {
  return client.fetch(
    `*[_type == "post" && featured == true] | order(publishedAt desc) [0...${limit}] {
      _id,
      title,
      slug,
      excerpt,
      "mainImage": mainImage.asset->url,
      category,
      publishedAt,
      readTime
    }`
  )
}

// Helper function to get all projects
export async function getAllProjects() {
  return client.fetch(
    `*[_type == "project"] | order(order asc, _createdAt desc) {
      _id,
      title,
      slug,
      description,
      "mainImage": mainImage.asset->url,
      technologies,
      liveUrl,
      githubUrl,
      featured,
      highlight,
      category,
      results,
      detailedDescription
    }`
  )
}

// Helper function to get featured projects for homepage
export async function getFeaturedProjects(limit = 3) {
  return client.fetch(
    `*[_type == "project" && featured == true] | order(order asc) [0...${limit}] {
      _id,
      title,
      slug,
      description,
      "mainImage": mainImage.asset->url,
      technologies,
      liveUrl,
      githubUrl,
      highlight,
      category,
      results,
      detailedDescription
    }`
  )
}

// Helper function to get a single project by slug
export async function getProjectBySlug(slug: string) {
  return client.fetch(
    `*[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      "mainImage": mainImage.asset->url,
      technologies,
      liveUrl,
      githubUrl,
      category,
      results,
      detailedDescription
    }`,
    { slug }
  )
}
