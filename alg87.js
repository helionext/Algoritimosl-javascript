/**
 * Entrar com um número e informar se ele é divisivel por 10, por 5, por 2 ou se
 * não é divisivel por nenhum destes.
 */

const rd = require('readline-sync')

let numero = rd.questionInt("Entre com um numero: ")

console.log()

if(numero % 2 === 0 || numero % 5 === 0 || numero % 10 === 0) {
    if(numero % 2 === 0) {
        console.log("Divisivel por 2.")
    }
    if(numero % 5 === 0) {
        console.log("Divisivel por 5.")
    }
    if(numero % 10 === 0) {
        console.log("Divisivel por 10.")
    }
} else {
    console.log("Não é divisivel por 2, 5 e 10.")
}