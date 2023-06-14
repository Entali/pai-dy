const validateEmail = (email: string): boolean =>
  Boolean(email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/))

export default validateEmail
