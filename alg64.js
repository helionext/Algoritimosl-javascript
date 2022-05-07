/**
 * Criar um algoritimo que leia o valor de um deposito e o valor da taxa de juros
 * Calcular e imprimir o valor do rendimento e o valor total depois dos rendimento.
 * 
 */

const rd = require('readline-sync')

let deposito = rd.questionFloat("Deposito: ")
let taxa = rd.questionFloat("Taxa de juros: ")

const RENDIMENTOS = deposito * (taxa / 100)
let valorAcumulado = deposito + RENDIMENTOS

console.log(`\nRendimentos: ${RENDIMENTOS.toFixed(2)}`);
console.log(`Valor total em conta: ${valorAcumulado.toFixed(2)}`);