/**
 * Ler dois numeros e trocar o valor das variaveis de forma que a variavel A passe a ter
 * o valor da variavel B e que a variavel B passe a ter o valor da variavel A. 
 * Apresentar os valores trocados.
 */

const rd = require('readline-sync')

let A = rd.questionInt("Digite o valor de A: ")
let B = rd.questionInt("Digite o valor de B: ")

let aux = A
A = B
B = aux

console.log("\nO valor de A: " + A);
console.log("O valor de B: " + B);