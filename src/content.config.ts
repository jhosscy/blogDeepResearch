import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const blogs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/blogs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
  })
});


export const collections = { blogs };
