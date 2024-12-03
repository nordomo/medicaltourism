import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://nordomo.github.io", // Full URL of your GitHub Pages site
  base: "/medicaltourism/", // Repository name as the base path
  integrations: [tailwind(), mdx(), sitemap(), icon()],
});
