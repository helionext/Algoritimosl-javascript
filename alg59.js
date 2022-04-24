/**
 * Criar um algoritimo que leia o numerador e o denominador de uma fração 
 * e transforma-lo em um número decimal
 */

const rd = require('readline-sync')

let numerador, denomiador

numerador = rd.questionInt("Numerador: ")
denominador = rd.questionInt("Denominador: ")

decimal = numerador / denominador

console.log(`\nDecimal: ${decimal}`);