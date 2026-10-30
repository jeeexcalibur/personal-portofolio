// Generate public/sitemap.xml dari app/data/portfolio.ts
// Dijalankan otomatis sebelum `npm run build` (lihat "prebuild" di package.json).
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const data = readFileSync(join(root, 'app/data/portfolio.ts'), 'utf8')

const BASE = 'https://anandajein.my.id'
const START = { experiences: 'export const experiences', awards: 'export const awards', projects: 'export const projects' }

function section(key, nextKey) {
  const from = data.indexOf(START[key])
  if (from === -1) return ''
  const to = nextKey ? data.indexOf(START[nextKey], from) : data.length
  return data.slice(from, to === -1 ? data.length : to)
}

const slugs = (chunk) => [...chunk.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1])
const titles = (chunk) => [...chunk.matchAll(/\n\s{4}title:\s*'([^']+)'/g)].map((m) => m[1])

const slugify = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

const expChunk = section('experiences', 'awards')
const awardChunk = section('awards', 'projects')
const projectChunk = section('projects', null)

const urls = [
  { loc: '/', priority: '1.0' },
  { loc: '/projects', priority: '0.9' },
  { loc: '/experience', priority: '0.7' },
  ...slugs(expChunk).map((s) => ({ loc: `/experience/${s}`, priority: '0.7' })),
  ...slugs(awardChunk).map((s) => ({ loc: `/awards/${s}`, priority: '0.6' })),
  ...titles(projectChunk).map((t) => ({ loc: `/projects/${slugify(t)}`, priority: '0.8' })),
]

const today = new Date().toISOString().slice(0, 10)
const body = urls
  .map(({ loc, priority }) => `  <url>\n    <loc>${BASE}${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`)
  .join('\n')

writeFileSync(
  join(root, 'public/sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`
)
console.log(`sitemap.xml: ${urls.length} URL`)
