import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

// nuxt generate output lives in app/.output/public/
const distDir = resolve(root, 'app', '.output', 'public')

const { html: beautify } = await import('js-beautify').then(m => m.default || m)

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) walk(full)
    else if (entry.name.endsWith('.html')) {
      const html = readFileSync(full, 'utf-8')
      const formatted = beautify(html, {
        indent_size: 2,
        max_preserve_newlines: 0,
        wrap_line_length: 0,
        preserve_newlines: false,
      })
      writeFileSync(full, formatted, 'utf-8')
      console.log(`  ✓ formatted ${full.replace(distDir, '').replace(/\\/g, '/')}`)
    }
  }
}

console.log(`Formatting HTML in ${distDir}...`)
walk(distDir)
console.log('Done.')
