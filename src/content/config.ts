import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    id: z.number(),
    title: z.string(),
    link: z.string().optional(),
    publishedAt: z.date(),
    description: z.string(),
    isPublish: z.boolean(),
    isDraft: z.boolean().default(false),
    headline: z.string().optional(),
    tags: z.array(z.string()),
    splashImage: z.string(),
  }),
});

const worksCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string().optional(),
    splashImage: z.string(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()),
    showAsPost: z.boolean().default(false),
    headline: z.string().optional(),
  }),
});

export const collections = { posts: postsCollection, works: worksCollection };
