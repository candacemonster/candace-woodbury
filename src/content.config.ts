import { defineCollection, z } from 'astro:content';

// Define the blog collection
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
  }),
});

// Define the roast-ride-read collection
const roastRideReadCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
  }),
});

// Register the collections
export const collections = {
  blog: blogCollection,
  "roast-ride-read": roastRideReadCollection,
};
