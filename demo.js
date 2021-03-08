const firstToLast = require('./index')

const list = [ 1, 2, 3, 4, 5, ]
const obj = { a: 1, b: 2, c: 3, d: 4, e: 5, }

console.log(firstToLast(list, 2, true)) // [ 3, 4, 5, 1, 2, ]
console.log(firstToLast(obj, 4, true)) // { e: 5, a: 1, b: 2, c: 3, d: 4, }