import validateEmail from '../validateEmail'

describe('validateEmail', () => {
  it('should return false if there is an empty string', () => {
    expect(validateEmail('')).toBe(false)
  })

  it('should return false if string does not match pattern', () => {
    expect(validateEmail('example')).toBe(false)
  })

  it('should return false if string does not match pattern', () => {
    expect(validateEmail('example@google')).toBe(false)
  })

  it('should return true if string matches pattern', () => {
    expect(validateEmail('example@i.ua')).toBe(true)
  })
})
