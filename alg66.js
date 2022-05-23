/**
 * Cirar um algoritimo que leia o peso de uma pessoa, só a parte inteira, 
 * calcular e imprimir
 * 1 - o peso da pesso em gramas
 * 2 - novo peso, em gramas, se a pessoa engordar 12%
 */

const rd = require('readline-sync')

let peso = rd.questionInt("Peso: ")

let pesoEmGramas = peso * 1000
let pesoAoEngordarDozePorcento = pesoEmGramas * 1.12

console.log("Peso em gramas: " + pesoEmGramas)
console.log("Peso em gramas: " + pesoAoEngordarDozePorcento)