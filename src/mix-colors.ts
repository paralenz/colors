export const mixColors = (color1: string, weight1: number, color2: string, weight2: number) => {
  const r1 = parseInt(color1.substring(1, 3), 16)
  const g1 = parseInt(color1.substring(3, 5), 16)
  const b1 = parseInt(color1.substring(5, 7), 16)

  const r2 = parseInt(color2.substring(1, 3), 16)
  const g2 = parseInt(color2.substring(3, 5), 16)
  const b2 = parseInt(color2.substring(5, 7), 16)

  const r3 = Math.round(r1 * weight1 + r2 * weight2)
  const g3 = Math.round(g1 * weight1 + g2 * weight2)
  const b3 = Math.round(b1 * weight1 + b2 * weight2)
  return `rgb(${r3}, ${g3}, ${b3})`
}
