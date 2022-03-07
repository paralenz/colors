import Color from 'color'

export const alpha = (color: string | Color, percentage = 0.20) => Color(color).alpha(percentage).toString()

export const lighten = (color: string, percentage = 0.20) => Color(color).lighten(percentage).toString()

export const darken = (color: string, percentage = 0.20) => Color(color).darken(percentage).toString()

export const saturate = (color: string, percentage = 0.20) => Color(color).saturate(percentage).toString()

export const blackAlpha = (alpha: number) => `rgba(0, 0, 0, ${alpha})`

export const whiteAlpha = (alpha: number) => `rgba(255,255,255, ${alpha})`

export const toRgba = (color: string) => Color(color).toString()
