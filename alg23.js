const rd = require('readline-sync');

let num1 = rd.questionFloat("Digite um numero: ");
let num2 = rd.questionFloat("Digite outro numero: ");

const media = (num1 + num2) / 2;

console.log("\nMédia:", media);