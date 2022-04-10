const rd = require('readline-sync');

let numero = rd.questionFloat("Entre com um numero: ");

const tercaParte = (numero / 3).toFixed(2);

console.log(`\nTerça parte: ${tercaParte}`);