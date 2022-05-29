/**
 * Criar um algoritimo que, dado um número de conta corrente com três digitos, retorne
 * o seu digito verificador, o qual é calculado da seguinte maneira:
 * 
 * Exemplo: número da conta: 235
 * - Somar o número da conta com seu inverson: 235+532 = 767
 * - Multiplicar cada digito pela sua ordem posicional e somar estes resultados: 767
 * - O último cada digito desse resultado é o digito verficador da conta (40 - 0)
 * 
 */

const rd = require('readline-sync')

let conta = rd.questionInt("Digite conta de tres digitos: ")

let d1 = parseInt(conta / 100)
let d2 = parseInt(conta % 100 / 10)
let d3 = parseInt(conta % 100 % 10)

let inverso = d3 * 100 + d2 * 10 + d1
let soma = conta + inverso

d1 = Math.trunc(soma / 100) * 1
d2 = Math.trunc(soma % 100 / 10) * 2
d3 = Math.trunc(soma % 100 % 10) * 3

let digito = (d1 + d2 + d3) % 10

console.log(`\nDigito verificador: ${digito}`)