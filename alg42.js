const rd = require('readline-sync')

let cateto_1 = rd.questionFloat("Cateto 1: ")
let cateto_2 = rd.questionFloat("Cateto 2: ")

let hipotenusa = Math.sqrt(cateto_1 ** 2 + cateto_2 ** 2)

console.log(`\nHipotenusa: ${hipotenusa}`)