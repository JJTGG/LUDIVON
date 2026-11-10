import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const contentTypes = [
  "how-to",
  "troubleshooting",
  "performance-optimization",
  "game-settings",
  "device-compatibility",
  "walkthrough",
  "technology-explainer"
] as const;

const createArticleSchema = (
  section: "android-gaming" | "game-guides"
) =>
  z
    .object({
      title: z.string().trim().min(1),

      description: z.string().trim().min(1),

      section: z.literal(section),

      contentType: z.enum(contentTypes),

      tags: z.array(z.string().trim().min(1)).default([]),

      authorId: z.string().trim().min(1),

      publishedAt: z.coerce.date().optional(),

      updatedAt: z.coerce.date().optional(),

      lastVerified: z.coerce.date().optional(),

      game: z.string().trim().min(1).optional(),

      gameVersion: z.string().trim().min(1).optional(),

      androidVersions: z
        .array(z.string().trim().min(1))
        .optional(),

      deviceApplicability: z.string().trim().min(1).optional(),

      testingDisclosure: z.string().trim().min(1),

      sources: z.array(z.httpUrl()).default([]),

      coverImage: z
        .object({
          src: z.string().trim().min(1),
          alt: z.string().trim().min(1)
        })
        .optional(),

      status: z
        .enum([
          "draft",
          "review",
          "published",
          "archived"
        ])
        .default("draft")
    })
    .superRefine((article, context) => {
      if (article.status === "published") {
        if (!article.publishedAt) {
          context.addIssue({
            code: "custom",
            path: ["publishedAt"],
            message: "Published articles must provide a publication date."
          });
        }

        if (!article.updatedAt) {
          context.addIssue({
            code: "custom",
            path: ["updatedAt"],
            message: "Published articles must provide an update date."
          });
        }
      }

      if (
        article.publishedAt &&
        article.updatedAt &&
        article.updatedAt < article.publishedAt
      ) {
        context.addIssue({
          code: "custom",
          path: ["updatedAt"],
          message: "The update date cannot be earlier than the publication date."
        });
      }
    });

const androidGaming = defineCollection({
  loader: glob({
    base: "./src/content/android-gaming",
    pattern: "**/*.{md,mdx}"
  }),
  schema: createArticleSchema("android-gaming")
});

const gameGuides = defineCollection({
  loader: glob({
    base: "./src/content/game-guides",
    pattern: "**/*.{md,mdx}"
  }),
  schema: createArticleSchema("game-guides")
});

export const collections = {
  androidGaming,
  gameGuides
};