// Writes the rendered page into dist/index.html so crawlers and first paint get the full content.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { render } from '../dist-ssr/entry-server.js'

const file = 'dist/index.html'
const html = readFileSync(file, 'utf8')
if (!html.includes('<!--app-->')) throw new Error('no <!--app--> placeholder in dist/index.html')
writeFileSync(file, html.replace('<!--app-->', render()))
rmSync('dist-ssr', { recursive: true, force: true })
