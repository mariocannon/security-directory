import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import path from 'path';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://nzsecurity.directory',
  compressHTML: true,
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    }
  }
});