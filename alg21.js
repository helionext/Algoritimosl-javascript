const rd = require('readline-sync');

let num1 = rd.questionInt("Digite um número: ");
let num2 = rd.questionInt("Digite outro número: ");

const produto = num1 * num2;

console.log(`\nProduto: ${produto}`);

