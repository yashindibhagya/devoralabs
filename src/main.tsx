import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Production HTML is prerendered (scripts/prerender.mjs) so crawlers see real
// content — hydrate it. In dev the root is empty, so render from scratch.
if (root.firstElementChild) hydrateRoot(root, app)
else createRoot(root).render(app)
