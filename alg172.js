/**
 * Criar um algoritimo que calcule o M.D.C entre dois números inteiro lidos.
 */

const rd = require('readline-sync');

let num1 = rd.questionInt("Num 1: ");
let num2 = rd.questionInt("Num 2: ");

if(num1 > num2) {
    let aux = num1; num1 = num2; num2 = aux;
}

let resto = num1 % num2;

while(resto !== 0) {
    num1 = num2; num2 = resto; resto = num1 % num2;
}

console.log("\nM.D.C: " + num2);