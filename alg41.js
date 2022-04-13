const rd = require('readline-sync')

let xnum1 = rd.questionFloat("Valor 1: ")
let xnum2 = rd.questionFloat("Valor 2: ")
let xnum3 = rd.questionFloat("Valor 3: ")

const x = xnum1 + xnum2 / (xnum3 + xnum1) + 2 * (xnum1 - xnum2) + Math.log2(64)

console.log(`\nx: ${x.toFixed(4)}`)