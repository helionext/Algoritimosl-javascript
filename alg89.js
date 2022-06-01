/**
 * Ler um número inteiro de 3 casas decimais e imprimir se o algarismos da casa das centenas
 * é par ou impar.
 */

const rd = require('readline-sync')

let numero = rd.questionInt("Entre com um numero de 3 algarismos: ")

let algarismosCentenas = parseInt(numero / 100)

console.log()

if(algarismosCentenas % 2 === 0) {
    console.log("Algarismo das centenas é par!")
} else {
    console.log("Algarismo das das centenas é impar!")
}