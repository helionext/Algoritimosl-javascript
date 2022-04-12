const rd = require('readline-sync');

let base = rd.questionFloat("Base: ")
let altura = rd.questionFloat("Altura: ")

let area = base * altura
let perimetro = 2 * (base + altura)
let diagonal = Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2))

console.log(`\nArea: ${area}`)
console.log(`Perimetro: ${perimetro}`)
console.log(`Diagonal: ${diagonal}`)

