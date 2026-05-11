import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Show this project on homepage',
      initialValue: false,
    }),
    defineField({
      name: 'highlight',
      title: 'Highlight',
      type: 'boolean',
      description: 'Highlight as AI-powered project',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'AI-Powered Website', value: 'ai-website' },
          { title: 'AI Chatbot', value: 'ai-chatbot' },
          { title: 'WhatsApp Automation', value: 'whatsapp' },
          { title: 'Full-Stack Web App', value: 'fullstack' },
          { title: 'Frontend', value: 'frontend' },
          { title: 'Backend', value: 'backend' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'results',
      title: 'Results/Impact',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Measurable results (e.g., "Increased leads by 300%")',
    }),
    defineField({
      name: 'detailedDescription',
      title: 'Detailed Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      category: 'category',
    },
    prepare(selection) {
      const { title, media, category } = selection
      return {
        title,
        media,
        subtitle: category,
      }
    },
  },
})
