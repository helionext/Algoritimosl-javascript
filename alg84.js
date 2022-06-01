/**
 * Entrar com um número e imprimir um das mensagens: é multiplo de 3 ou não é multiplo de 3.
 */

const rd = require('readline-sync')

let numero = rd.questionInt("Entre com um numero: ")

console.log()

if(numero % 3 === 0) {
    console.log("Múltiplo de 3.")
} else {
    console.log("Não é mútiplo de 3.")
}