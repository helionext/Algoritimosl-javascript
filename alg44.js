/*
    Entrar com a razão de uma PG e o valor do 1º termo. 
    Calcular e imprimir o 5º termo da série.
*/
const rd = require('readline-sync')

let termo = rd.questionInt("1º termo: ")
let razao = rd.questionInt("Razao: ")

const quintoTermo = termo * Math.pow(razao, 4)

console.log(`\n5º termo desta P.G: ${quintoTermo}`)
