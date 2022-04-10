const rd = require('readline-sync');

let numero = rd.questionFloat("Entre com um numero: ");

const logaritimoBase10 = Math.log10(numero);

console.log(`\nLogaritimo na base 10: ${logaritimoBase10}`);
