/**
 * Construir um algoritmo que leia dois números e efetue a adição. Caso o valor
 * somado seja maior que 20, este devera ser apresentado somando-se a ele mais 8;
 * caso o valor somado seja menor ou igual a 20, este deverá ser aprensetado
 * subtraindo-se 5.
 */

const rd = require('readline-sync')
let num1 = rd.questionInt("Digite um numero: ")
let num2 = rd.questionInt("Digite outro numero: ")

let soma = num1 + num2

console.log()

if(soma > 20) {
    console.log("Soma + 8 = " + (soma + 8))
} else {
    console.log("Soma - 5 = " + (soma - 5))
}