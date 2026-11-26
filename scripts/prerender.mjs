// Post-build step: renders the React app to static HTML and injects SEO assets
// so search engines and social previews get full content without running JS.
import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const { render, buildJsonLd, SITE_URL } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
)

const indexPath = path.join(dist, 'index.html')
let html = await readFile(indexPath, 'utf8')

const jsonLd = JSON.stringify(buildJsonLd()).replace(/</g, '\\u003c')
html = html
  .replace('<!--app-html-->', render())
  .replace('<!--app-jsonld-->', `<script type="application/ld+json">${jsonLd}</script>`)

if (html.includes('<!--app-')) throw new Error('prerender: unreplaced placeholder in index.html')
await writeFile(indexPath, html)

const today = new Date().toISOString().slice(0, 10)
await writeFile(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`,
)
await writeFile(
  path.join(dist, 'robots.txt'),
  `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`,
)

await rm(ssrDir, { recursive: true, force: true })
console.log(`prerender: wrote index.html, sitemap.xml, robots.txt for ${SITE_URL}`)
