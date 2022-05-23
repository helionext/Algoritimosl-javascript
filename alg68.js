/**
 * Ler dois números reais e imprimir o quadrado da diferença do primeiro valor pelo
 * segundo e a diferença dos quadrados.
 */

const rd = require('readline-sync')

let num1 = rd.questionFloat("Digite um número: ")
let num2 = rd.questionFloat("Digite outro número: ")

let quadradoDaDiferenca = (num1 - num2) ** 2
let diferencaDosQuadrados = num1 ** 2 - num2 ** 2

console.log("\nQuadrado da diferença:", quadradoDaDiferenca)
console.log("Diferença dos quadrados:", diferencaDosQuadrados)