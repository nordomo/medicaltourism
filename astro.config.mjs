import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://lively-fenglisu-27e23f.netlify.app", // Use your Netlify site URL or leave blank if unknown
  integrations: [tailwind(), mdx(), sitemap(), icon()],
});
