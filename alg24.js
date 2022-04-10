const rd = require('readline-sync');

let dividendo = rd.questionInt("Digite um número: ");
let divisor = rd.questionInt("Digite outro número: ");


const quociente = dividendo / divisor;
const resto = dividendo % divisor;

console.log();

console.log(`Dividendo: ${dividendo}`);
console.log(`Divisor: ${divisor}`);
console.log(`Quociente: ${quociente}`);
console.log(`Resto: ${resto}`);
