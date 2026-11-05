import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nedilko.dev',
  output: 'static',
  // The site's CSS is a few KB, so inlining it removes a render-blocking request.
  build: { inlineStylesheets: 'always' },
  integrations: [sitemap()],
});
