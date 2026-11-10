
# LUDIVON

**Gaming & Technology Guides**

Understand your tech. Play smarter.

An independent publication from TGG HUB.

## About

LUDIVON publishes practical guides about Android gaming and individual games.

The publication focuses on:

- Android gaming performance and optimisation
- Game settings and compatibility
- Troubleshooting and practical explanations
- Game-specific guides and assistance

## Technology

- Astro
- TypeScript
- Markdown-first content
- Astro Content Collections
- Pagefind static search
- Cloudflare Workers Static Assets (preferred hosting)

## Requirements

- Node.js 24
- npm

## Development

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Run diagnostics:

```sh
npm run check
```

Build the static website and search index:

```sh
npm run build
```

Preview the generated website:

```sh
npm run preview
```

## Content

Articles are stored in:

- `src/content/android-gaming/`
- `src/content/game-guides/`

Every article must follow the content schema in `src/content.config.ts`.

New entries default to `draft`.

Only entries explicitly marked `published` are generated as public article pages.

Draft, review and archived entries must not be included in public listings or the Pagefind index.

## Search

Pagefind generates its search index after Astro builds the static website.

Search assets are generated under:

`dist/pagefind/`

## Indexing and launch safeguards

Search engine indexing is disabled during development.

The repository currently includes:

- A restrictive `robots.txt`
- A global `X-Robots-Tag: noindex, nofollow` header
- No sitemap generation by default

Public indexing must not be enabled until the publication has passed its launch-readiness checks.

To generate a sitemap, configure both:

- `SITE_URL`
- `PUBLIC_INDEXING_ENABLED=true`

The noindex header and restrictive robots policy must also be updated through the approved launch process.

## Architecture principles

- Static-first publishing
- No database in V1
- No reader accounts
- No comments or forums
- No reader-facing payment features
- Advertising remains disabled until separately approved
- Human editorial review is required before publication

## Publisher

LUDIVON is an independent publication from TGG HUB.
