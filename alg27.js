const rd = require('readline-sync');

let numero = rd.questionFloat("Numero: ");
let base = rd.questionFloat("Base: ");

const logaritimo = Math.log(numero) / Math.log(base);

console.log(`\nLogaritimo de ${numero} na base ${base}: ${logaritimo}`);