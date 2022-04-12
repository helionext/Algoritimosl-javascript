const rd = require('readline-sync')

let raio = rd.questionFloat("Raio: ")

let perimetro = 2 * Math.PI * raio;
let area = 2 * Math.pow(Math.PI, 2)

console.log(`\nPerimetro: ${perimetro.toFixed(4)}`)
console.log(`Area: ${area.toFixed(4)}`)