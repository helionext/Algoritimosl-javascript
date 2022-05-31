/**
 * Entrar com um número e imprimir a raiz quadrada do número caso ele seja positivo e o
 * quadrado do número caso ele seja negativo.
 */

const rd = require('readline-sync')

let numero = rd.questionInt("Digite um número: ")

console.log()

if(numero > 0) {
    console.log("Raiz quadrada de %d é %", numero, Math.sqrt(numero))
} else {
    console.log("Quadrado de %d é %d", numero, numero ** 2)
}