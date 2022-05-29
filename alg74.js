/**
 * Ler um numero imprimir se ele é positivo, negativo ou nulo.
 */

const rd = require('readline-sync')

let numero = rd.questionInt("Entre com um numero: ")

console.log()

if(numero > 0) {
    console.log("Positivo")
} else if(numero < 0) {
    console.log("Negativo")
} else {
    console.log("Nulo")
}