/*
    Efetuar o cálculo da quantidade de litros de combustivel gastos em uma viagem,
    sabendo-se que o carro faz 12 km com um litro. Deverãp ser fornecidos o tempo
    gasto na viagem e a velocidade média.

    O Algoritimo deverá apresentar os valores da velocidade média, tempo gasto na viagem,
    distancia percorrida e quantidade de litros utilizados na viagem
*/

const rd = require('readline-sync')

let tempo = rd.questionFloat("Tempo de viagem: ")
let velocidade = rd.questionFloat("Velocidade média: ")

let distancia = tempo * velocidade
let litrosUsados = distancia / 12

console.log(`\nVelocidade média: ${velocidade} km/h`)
console.log(`Tempo: ${tempo} hrs`)
console.log(`Distancia: ${distancia} km`)
console.log(`Litros usados: ${litrosUsados} lts`)