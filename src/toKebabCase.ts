export const toKebabCase = (str: string) => {
  return `${(str as string as any)
    .match(/[A-Z]+[^A-Z]*|[^A-Z]+/g)
    .join('-')
    .toLowerCase()}`
}
