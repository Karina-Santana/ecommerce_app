const hasLowerCase = (password) => /[a-z]/g.test(password)
const hasUpperCase = (password) => /[A-Z]/g.test(password)
const hasNumber = (password) => /[0-9]/g.test(password)
const isOver6Char = (password) => password.length > 6


export { hasLowerCase, hasUpperCase, hasNumber, isOver6Char }