import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://wsonglin.github.io',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
