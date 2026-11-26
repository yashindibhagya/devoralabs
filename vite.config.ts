import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import siteConfig from './site.config.json'

// Public site URL (canonical, Open Graph, sitemap). Edit site.config.json to change it.
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'inject-site-url',
      transformIndexHtml: {
        order: 'pre',
        handler: (html) => html.split('%SITE_URL%').join(siteConfig.siteUrl),
      },
    },
  ],
})
