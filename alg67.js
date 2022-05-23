/**
 * Criar um algoritimo que leia um número entre 0 e 60 e imprimir o seu sucessor,
 * sabendo que o sucessor de 60 é 0.Não pode ser utilizado nenhum comando de seleção
 * e nem de repetição.
 */

const rd = require('readline-sync')

let numero = rd.questionInt("Entre com um numero: ")

let sucessor = numero % 60 + 1

console.log("\nSucessor:", sucessor)