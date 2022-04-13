const rd = require('readline-sync')

let base = rd.questionFloat("Base: ")
let altura = rd.questionFloat("Altura: ")

const area = (altura * base) / 2

console.log(`\nArea: ${area}`)