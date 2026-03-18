// src/content.config.ts
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const terrenos = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "src/content/terrenos" }), // PAS DE ./ AU DÉBUT
  schema: z.object({
    title: z.string(),
    precio: z.number(),
    area: z.number(),
    ubicacion: z.string(),
    status: z.enum(['disponible', 'vendido', 'reservado']),
    image: z.string(),
  }),
});

export const collections = { terrenos };