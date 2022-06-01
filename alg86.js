/**
 * Entrar com número e informar se ele é divisivel por 3 e por 7.
 */

const rd = require('readline-sync')

let numero = rd.questionInt("Entre com um número: ")

console.log()

if(numero % 3 === 0 && numero % 7 === 0) {
    console.log("Divisivel por 3 e por 7.")
} else {
    console.log("Não é divisivel por 3 e por 7.")
}