/**
 * Construir um algoritimo que indique se o número digitado está compreendido entre 20 e 90
 * ou não.
 */

const rd = require('readline-sync')

let numero = rd.questionInt("Digite um número: ")

console.log()

if(numero > 20 && numero < 90) {
    console.log("Numero esta entre 20 e 90.")
} else {
    console.log("Numero não esta entre 20 e 90.")
}