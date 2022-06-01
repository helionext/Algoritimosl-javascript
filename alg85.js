/**
 * Entrar com um número e informar se ele é ou não divisível por 5.
 */

const rd = require('readline-sync')

let numero = rd.questionInt("Entre com um numero: ")

console.log()

if(numero % 5 === 0) {
    console.log("Múltiplo de 5.")
} else {
    console.log("Não é mútiplo de 5.")
}