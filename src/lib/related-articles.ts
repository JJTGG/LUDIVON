import type { CollectionEntry } from "astro:content";

export type ArticleEntry =
  | CollectionEntry<"androidGaming">
  | CollectionEntry<"gameGuides">;

interface ScoredArticle {
  article: ArticleEntry;
  score: number;
}

const normalize = (value: string) =>
  value.trim().toLocaleLowerCase("en");

export function getRelatedArticles(
  currentArticle: ArticleEntry,
  candidates: ArticleEntry[],
  limit = 3
): ArticleEntry[] {
  const currentTags = new Set(
    currentArticle.data.tags.map(normalize)
  );

  const currentGame = currentArticle.data.game
    ? normalize(currentArticle.data.game)
    : undefined;

  const scoredArticles: ScoredArticle[] = candidates
    .filter((candidate) => {
      const isCurrentArticle =
        candidate.collection === currentArticle.collection &&
        candidate.id === currentArticle.id;

      return (
        candidate.data.status === "published" &&
        !isCurrentArticle
      );
    })
    .map((candidate) => {
      const candidateGame = candidate.data.game
        ? normalize(candidate.data.game)
        : undefined;

      const sameGame =
        Boolean(currentGame) &&
        Boolean(candidateGame) &&
        currentGame === candidateGame;

      const sharedTagCount = candidate.data.tags.filter((tag) =>
        currentTags.has(normalize(tag))
      ).length;

      const sameContentType =
        candidate.data.contentType === currentArticle.data.contentType;

      const score =
        (sameGame ? 6 : 0) +
        sharedTagCount * 3 +
        (sameContentType ? 1 : 0);

      return {
        article: candidate,
        score
      };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      const aDate = a.article.data.publishedAt?.getTime() ?? 0;
      const bDate = b.article.data.publishedAt?.getTime() ?? 0;

      if (bDate !== aDate) {
        return bDate - aDate;
      }

      return a.article.data.title.localeCompare(
        b.article.data.title
      );
    });

  return scoredArticles
    .slice(0, Math.max(0, limit))
    .map((item) => item.article);
}