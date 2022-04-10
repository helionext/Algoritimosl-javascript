const rd = require('readline-sync');


let num1 = rd.questionFloat("Numero 1: ");
let num2 = rd.questionFloat("Numero 2: ");
let num3 = rd.questionFloat("Numero 3: ");
let num4 = rd.questionFloat("Numero 4: ");

const mediaPonderada = ((num1 * 1) + (num2 * 2) + (num3 * 3) + (num4 * 4)) / 10;

console.log(`\nMédia ponderada: ${mediaPonderada}`);