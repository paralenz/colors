import { colors } from './index'
import fs from 'fs'
import path from 'path'
import { toKebabCase } from './toKebabCase'

const variableNames = Object.keys(colors).map((name: string) => {
  // @ts-expect-error ignore this
  return `${toKebabCase(name)}: ${colors[name]};`
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

writeFile('_index.scss', makeScss())
writeFile('index.css', makeCss())
