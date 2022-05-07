/**
 * Criar um algoritimo que receba um número real, calcula e imprimir:
 * - A parte inteira do número 
 * - A parte fracionaria do numero
 * - O número arredondado
 */

const rd = require('readline-sync') 

let numero = rd.questionFloat("Numero: ")

let parteInteira = parseInt(numero)
let parteFracionaria = numero - parteInteira
let numeroArredondado = Math.ceil(numero)

console.log(`\nNumero inteiro: ${parteInteira}`)
console.log(`Parte francionaria: ${parteFracionaria}`)
console.log(`Numero arredondado: ${numeroArredondado}`)