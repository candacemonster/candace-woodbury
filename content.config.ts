// content.config.ts
import { defineCollection, z } from 'astro:content';

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      date:  z.string(),
    }),
  }),
  'roast-ride-read': defineCollection({
    schema: z.object({
      title: z.string(),
      date:  z.string(),
    }),
  }),
};
