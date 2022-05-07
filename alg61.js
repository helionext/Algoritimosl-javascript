/**
 * Fazer um algoritimo que leia o valor gasto com despesas realizadas em um restaurante
 * e imprima o valor total com a gorjeta de 10%;
 */

const rd = require('readline-sync')

let conta = rd.questionFloat("Conta: ")

const GORJETA = conta * 0.10
let conta_total = conta + GORJETA

console.log(`\nGorjeta: R$ ${GORJETA.toFixed(2)}`)
console.log(`Valor conta total: R$ ${conta_total.toFixed(2)}`)

