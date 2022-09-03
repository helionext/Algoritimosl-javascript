/**
 * Criar um algoritimo que calcule o M.M.C entre dois números lidos.
 */

const rd = require('readline-sync');

let num1 = rd.questionInt("Numero 1: ");
let num2 = rd.questionInt("Numero 2: ");

if(num1 > num2) {
    let aux = num1; num1 = num2; num2 = aux;
}

let soma = num1;

while(soma % num2 !== 0) {
    soma = soma + num1;
}

console.log(`\nM.M.C: ${soma}`);