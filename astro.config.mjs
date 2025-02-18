// @ts-check
import { defineConfig, envField } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import tailwindcss from "@tailwindcss/vite";

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://your-domain.com",
  env: {
    schema: {
      SITE_NAME: envField.string({ context: "client", access: "public", default: "Site Name" }),
      PUBLIC_PH_KEY: envField.string({ context: "client", access: "public", optional: true }),
      // PORT: envField.number({ context: "server", access: "public", default: 4321 }),
      // API_SECRET: envField.string({ context: "server", access: "secret" }),
    }
  },

  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx(), sitemap()]
});