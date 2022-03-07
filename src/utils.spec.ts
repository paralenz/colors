import { alpha, darken, lighten, saturate, blackAlpha, toRgba, whiteAlpha } from './utils'

describe('utils', () => {
  describe('alpha', () => {
    it('should convert to rgba', () => {
      expect(alpha('red', 0.10)).toBe('rgba(255, 0, 0, 0.1)')
    })
  })
  
  describe('darken', () => {
    it('should convert to hsl', () => {
      expect(darken('#440706', 0.10)).toBe('hsl(1, 83.8%, 13.1%)')
    })
  })
  
  describe('lighten', () => {
    it('should convert to hsl', () => {
      expect(lighten('#a5d7b7', 0.50)).toBe('hsl(141.60000000000002, 38.5%, 100%)')
    })
  })
  
  describe('saturate', () => {
    it('should convert to hsl', () => {
      expect(saturate('#088bbf', 0.50)).toBe('hsl(197, 100%, 39%)')
    })
  })
  
  describe('blackAlpha', () => {
    it('should convert apply alpha', () => {
      expect(blackAlpha(0.50)).toBe('rgba(0, 0, 0, 0.5)')
    })
  })
  
  describe('whiteApha', () => {
    it('should convert apply alpha', () => {
      expect(whiteAlpha(0.50)).toBe('rgba(255,255,255, 0.5)')
    })
  })
  
  describe('toRgba', () => {
    it('should convert to rgba', () => {
      expect(toRgba('hotpink')).toBe('rgb(255, 105, 180)')
    })
  })
})