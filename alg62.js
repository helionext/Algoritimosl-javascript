/**
 * Criar um algoritimo que leia um valor de hora e informe quantos minutos
 * se passaram desde o inicio do dia.
 */

const rd = require('readline-sync')

let hora_atual = rd.questionInt("Que horas são agora: ")
let minutos = rd.questionInt('E os minutos: ')

const MINUTOS = hora_atual * 60 + minutos

console.log('\nAte agora se passaram %d minutos', MINUTOS)