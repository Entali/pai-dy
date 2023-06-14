import validatePhone from '../validatePhone'

describe('validatePhone', () => {
  it('should return false if there is an empty string', () => {
    expect(validatePhone('')).toBe(false)
  })

  it('should return false if string does not match pattern', () => {
    expect(validatePhone('+810000')).toBe(false)
  })

  it('should return true if string matches pattern', () => {
    expect(validatePhone('+817012345678')).toBe(true)
  })
})
