import fs from 'fs'
import path from 'path'
import slugify from 'slugify'
import { colors } from './index'

const variableNames = Object.keys(colors).map((name: string) => {
  // @ts-expect-error ignore this
  return `${slugify(name, { trim: true })}: ${colors[name]};`
})

const makeScss = () => {
  return variableNames.map(v => `$${v}`).join('\n')
}

const makeCss = () => {
  return `:root {
  ${variableNames.map(v => `--${v}`).join('\n  ')}
}`
}

const writeFile = (toFile: string, content: string) => {
  fs.writeFileSync(
    path.join(__dirname, toFile),
    content,
    { encoding: 'utf-8' }
  )

  console.log(`✅  ${toFile} has been generated`)
}

const makeXml = () => {
  return [
    '<?xml version="1.0" encoding="utf-8"?>',
    '<resources>',
    Object.keys(colors).map((name: string) => {
      return name === 'transparent'
        ? '<color name="transperant">#ffffff00</color>'
      // @ts-expect-error ignore this
        : `  <color name="${name.split(/(?=[A-Z])/).join('_').toLowerCase()}">${colors[name]}</color>`
    }).join('\n'),
    '</resources>'
  ].join('\n')
}

writeFile('_index.scss', makeScss())
writeFile('index.css', makeCss())
writeFile('colors.xml', makeXml())
