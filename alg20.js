const rd = require('readline-sync');

let num1 = rd.questionInt("Digite um numero: ");
let num2 = rd.questionInt("Digite outro numero: ");

const soma = num1 + num2;

console.log(`Soma: ${soma}`);