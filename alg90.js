/**
 * Ler um numero inteiro de 4 casas e imprimir se é ou não múltiplo de quatro o número 
 * formado pelos algarismos que estão nas casas das unidades de milhar e das centenas.
 */

const rd = require('readline-sync')

let numero = rd.questionInt("Entre com um numero de 4 casas decimais: ")

let milhar = parseInt(numero / 1000)

console.log()

if(milhar % 4 === 0) {
    console.log("Número na casa dos milhares é mútiplo de 4.")
} else {
    console.log("Número na casa dos milhares não é mútiplo de 4")
}