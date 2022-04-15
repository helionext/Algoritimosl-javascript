const rd = require('readline-sync')

let valorDaHora = rd.questionFloat("Valor da hora: ")
let numeroDeAulas = rd.questionInt("Numero de aulas: ")
let percentualDescontoInss = rd.questionFloat("Percentual de desconto do INSS: ")

const CALC =  ((100 - percentualDescontoInss) / 100)
let salarioBruto = valorDaHora * numeroDeAulas 
let salarioLiquido = salarioBruto * CALC

console.log(`\nSalario Bruto: R$ ${salarioBruto.toFixed(2)}`)
console.log(`Salario Liquido: R$ ${salarioLiquido.toFixed(2)}`);