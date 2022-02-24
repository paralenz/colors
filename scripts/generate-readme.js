const { colors } = require( '../dist/index')
const { readFileSync, writeFileSync } = require('fs')
const { join } = require('path')

const generateTableRow = (name, hex) => {
  return `| ${name} | ![](https://via.placeholder.com/15/${hex.replace('#', '')}?text=+) \`${hex}\`  |`
}

const res = `| Name | Color |
|---|---|
${Object.entries(colors).map(([name, hex]) => generateTableRow(name, hex)).join('\n')}`

const content = readFileSync(join(__dirname, '..', '.github', 'templates', 'readme.tmpl'), { encoding: 'utf-8' })

writeFileSync(join(__dirname, '..', 'readme.tmpl'), content.replace(/%colors%/gmi, res))

console.log('✅ README.md has been updated')