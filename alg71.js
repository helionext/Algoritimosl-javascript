/**
 *  Criar um algoritimo que leia a quantidade de fitas de uma locadora de video
 *  possui e o valor que ela cobra por cada aluguel, mostrando as informações pedidas a seguir:
 *  
 *  1 - Sabendo que um terço das fitas são alugadas por mês, exiba o faturamento anual da locadora
 *  2 - Quando o cliente atrasa a entrega, é cobrada um multa de 10 % sobre o valor do aluguel.
 *      Sabendo que um décimo das fitas alugadas no mês são devolvidas com atraso, calcule o valor
 *      ganho com multas por mês.
 *  3 - Sabendo ainda que 2% de fitas se estragam ao longo do ano, e um décimo de total
 *      é comprado para reposição, exiba a quantidade de fitas que a locadora terá no final do ano. 
 */

const rd = require('readline-sync')

let quantidadeFitas = rd.questionInt("Quantas fitas tem na sua locadora: ")

let faturamentoAnual = quantidadeFitas / 3 * 12
let ganhoComMultasMes = (faturamentoAnual / 12) * 0.10
let totalFitasAnoSeguinte = (quantidadeFitas * 0.98) + (quantidadeFitas / 10)

console.log(`\nFaturamento anual: ${faturamentoAnual.toFixed(2)}`)
console.log(`Ganho com multas por mes: ${ganhoComMultasMes.toFixed(2)}`)
console.log(`Quantidade de fitas para o ano seguinte: ${totalFitasAnoSeguinte}`)