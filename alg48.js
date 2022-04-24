/*
    Ler uma temperatura em graus centigrados e apresenta-la convertida em graus
    Farenheit. A formula de conversão é F = (9 * c + 160) / 5 onde F é a temperatura
    em Fahrenheit e C é a temperatura em centigrados. 
*/
const rd = require('readline-sync')

let grausCentigrados = rd.questionFloat("Digite um numero em graus centigrados: ")

let grausFarenheit = (9 * grausCentigrados + 160) / 5

console.log(`\nGraus farenheit: ${grausFarenheit.toFixed(3)}`)

