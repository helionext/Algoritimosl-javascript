/*
    Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a
    formula: volume = 3.14159 * R ** 2 * altura
*/

const rd = require('readline-sync')

let volume, altura, raio
const PI = 3.14159

altura = rd.questionFloat("Digite a altura: ")
raio = rd.questionFloat("Digite o raio: ")

volume = PI * raio ** 2 * altura

console.log(`\nVolume: ${volume.toFixed(4)}`)
