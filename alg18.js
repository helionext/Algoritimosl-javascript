const rl = require('readline-sync');

let numero = rl.questionInt("Digite um número: ");

const sucessor = numero + 1;
const antecessor = numero - 1;

console.log(`Sucessor: ${sucessor}`);
console.log(`Antecessor: ${antecessor}`);