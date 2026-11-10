import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const baseArticleSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),

  section: z.enum([
    "android-gaming",
    "game-guides"
  ]),

  contentType: z.string().min(1),

  tags: z.array(z.string()).default([]),

  authorId: z.string().min(1),

  publishedAt: z.coerce.date(),

  updatedAt: z.coerce.date().optional(),

  lastVerified: z.coerce.date(),

  game: z.string().optional(),

  gameVersion: z.string().optional(),

  androidVersions: z.array(z.string()).optional(),

  deviceApplicability: z.string().optional(),

  testingDisclosure: z.string().min(1),

  sources: z.array(z.string().url()).default([]),

  coverImage: z.string().optional(),

  status: z.enum([
    "draft",
    "review",
    "published",
    "archived"
  ]).default("draft")
});

const androidGaming = defineCollection({
  loader: glob({
    base: "./src/content/android-gaming",
    pattern: "**/*.{md,mdx}"
  }),
  schema: baseArticleSchema.extend({
    section: z.literal("android-gaming")
  })
});

const gameGuides = defineCollection({
  loader: glob({
    base: "./src/content/game-guides",
    pattern: "**/*.{md,mdx}"
  }),
  schema: baseArticleSchema.extend({
    section: z.literal("game-guides")
  })
});

export const collections = {
  androidGaming,
  gameGuides
};