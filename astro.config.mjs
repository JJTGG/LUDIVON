import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const siteUrl = process.env.SITE_URL;
const indexingEnabled = process.env.PUBLIC_INDEXING_ENABLED === "true";

if (indexingEnabled && !siteUrl) {
  throw new Error(
    "SITE_URL must be configured before public indexing can be enabled."
  );
}

export default defineConfig({
  ...(siteUrl ? { site: siteUrl } : {}),
  output: "static",
  trailingSlash: "always",
  integrations: indexingEnabled ? [sitemap()] : []
});