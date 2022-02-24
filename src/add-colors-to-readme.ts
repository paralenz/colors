#!/usr/bin/env node
import { colors } from './index'
import { readFileSync } from 'fs'
import { join } from 'path'
// console.log(colors);

const generateTableRow = (name: string, hex: string) => {
  return `| ${name} | ![](https://via.placeholder.com/15/${hex.replace('#', '')}?text=+) \`${hex}\`  |`
}

const res = `| Name | Color |
|---|---|
${Object.entries(colors).map(([name, hex]) => generateTableRow(name, hex)).join('\n')}`

const content = readFileSync(join(__dirname, '..', '.github', 'templates', 'readme.tmpl'), { encoding: 'utf-8' })

console.log(content.replace(/%colors%/gmi, res))
