const rd = require('readline-sync')

let lado = rd.questionFloat("Lado do quadrado: ")

let perimetro = 4 * lado
let area = Math.pow(lado, 2)
let diagonal = Math.sqrt(Math.pow(lado, 2) + Math.pow(lado, 2))

console.log(`\nPerimetro: ${perimetro.toFixed(3)}`)
console.log(`Area: ${area.toFixed(3)}`)
console.log(`Diagonal: ${diagonal.toFixed(3)}`)