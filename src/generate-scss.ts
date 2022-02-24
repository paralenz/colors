import { colors } from './index'
import fs from 'fs'
import path from 'path'

const toKebabCase = (str: string) => {
  return `$${(str as string as any)
    .match(/[A-Z]+[^A-Z]*|[^A-Z]+/g)
    .join('-')
    .toLowerCase()}`
}

const variables = Object.keys(colors).map((name: string) => {
  // @ts-expect-error ignore this
  return `${toKebabCase(name)}: ${colors[name]};`
})

fs.writeFileSync(
  path.join(__dirname, '_index.scss'),
  variables.join('\n'),
  { encoding: 'utf-8' }
)

console.log('✅  _index.scss has been generated')
