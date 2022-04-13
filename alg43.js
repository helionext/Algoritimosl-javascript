/*
    Entrar com a razão de uma PA e valor do 1º termo. Calcular e imprimir o
    10º termo da série.
*/
const rd = require('readline-sync')

let decimoTermo, razao, termo

termo = rd.questionInt("1º Termo: ")
razao = rd.questionInt("Razao: ")

decimoTermo = termo + 9 * razao

console.log(`\nDecimo termo: ${decimoTermo}`)