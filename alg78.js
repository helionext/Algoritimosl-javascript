/**
 * Entrar com um numero e imprimi-lo casao seja maior que 20.
 */

const rd = require('readline-sync')

let numero = rd.questionInt("Entre com um numero: ")

if(numero > 20) {
    console.log(`\nNumero ${numero} é maior que 20.`)
} 