/**
 * Construa um algoritimo de calculadora. Receba dois numero e imprima o resultado 
 */

const rd = require('readline-sync')

let operacao = rd.question("[+, - , * , /] escolha uma das operacoes: ")

let num1 = rd.questionFloat("Num1: ")
let num2 = rd.questionFloat("Num2: ")


if(operacao === "+" || operacao === "-" || operacao === "*" || operacao === "/") {
    let resultado = eval(`${num1} ${operacao} ${num2}`)
    console.log(`\n${num1} ${operacao} ${num2} = ${resultado}`)
} else {
    console.log("\nEsta operação não existe")
}