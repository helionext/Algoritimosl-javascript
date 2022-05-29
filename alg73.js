/**
 * Entre com 3 numeros e encontre o menor deles usando a estrutura (if).
 */

const rd = require('readline-sync')

let num1 = rd.questionInt("Entre com um numero: ")
let num2 = rd.questionInt("Entre com outro numero: ")
let num3 = rd.questionInt("Entre com outro numero: ")

let maior = -Infinity

if(num1 > num2 && num1 > num3) {
    maior = num1
} else if(num2 > num3) {
    maior = num2
} else {
    maior = num3
}

console.log("\nMaior: " + maior)