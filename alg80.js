/**
 * Construir um algoritimo que leia dois valores numéricos inteiros e efetue adição;
 * caso o resultado seja maior que 10, apresenta-lo.
 */

const rd = require('readline-sync')

let num1 = rd.questionInt("Digite um numero: ")
let num2 = rd.questionInt("Digite outro numero: ")

let soma = num1 + num2

if(soma > 10) {
    console.log(`\n${num1} + ${num2} = ${soma}`)
}