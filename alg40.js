const rd = require('readline-sync')

let nota_1 = rd.questionFloat("Nota 1: ")
let nota_2 = rd.questionFloat("Nota 2: ")

let media_truncada = Math.trunc((nota_1 + nota_2) / 2)
let media_arredondada = Math.ceil((nota_1 + nota_2) / 2)

console.log(`\nMédia truncada: ${media_truncada}`)
console.log(`Média media arredondada: ${media_arredondada}`)