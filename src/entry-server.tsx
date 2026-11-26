import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import { buildJsonLd, seo, SITE_URL } from './seo'

/** Used at build time only (scripts/prerender.mjs) to emit static HTML for crawlers. */
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

export { buildJsonLd, seo, SITE_URL }
