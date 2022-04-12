const rd = require('readline-sync')

let lado_a = rd.questionFloat("Lado A: ")
let lado_b = rd.questionFloat("Lado B: ")
let lado_c = rd.questionFloat("Lado C: ")

let diagonal = Math.sqrt(lado_a ** 2 + lado_b ** 2 + lado_c ** 2)

console.log(`\nDiagonal: ${diagonal.toFixed(3)}`)

