/**
 * Uma pessoa resolveu fazer um aplicação em um poupança programada. Para calcular seu
 * rendimento, ela devera fornecer o valor constante da aplicação mensal, a taxa e o
 * número de meses. Sabendo-se que a formula usada para este cáculo é:
 *      valor acumulado = P * (1 + n) ** n - 1 / i              i = taxa
 *                                                              P = aplicação mensal
 *                                                              n = número de meses
 */

const rd = require('readline-sync')

let valorMensal = rd.questionFloat("Valor mensal: ")
let taxa = rd.questionFloat("Taxa: ")
let meses = rd.questionInt("Meses: ")


const VALOR_ACUMULADO = valorMensal * ((((1 + taxa / 100) ** meses) - 1) / taxa) + valorMensal

console.log("\nValor acumulado: R$", VALOR_ACUMULADO.toFixed(2))