const rd = require('readline-sync');

let numero = rd.questionInt("Digite um numero: ");

const raizQuadrada = Math.sqrt(numero);
const quadrado = Math.pow(numero, 2);

console.log(`\nNumero: ${numero}`);
console.log(`Raiz quadrada: ${raizQuadrada}`);
console.log(`Quadrado: ${quadrado}`);

