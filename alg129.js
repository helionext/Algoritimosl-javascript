/**
 * Criar um algoritimo que leia um número que servirá para controlar os primeiros números impares.
 * Deverá ser impressa a soma desses números. Suponha que num será maior que zero.
 */

const rd = require('readline-sync');

let controlador = rd.questionInt("Controlador: ");

let numeroImpar = 1;

let somaImpares = 0;

if(controlador > 0) {
    for (let i = 0; i < controlador; i++) {
        somaImpares += numeroImpar;
        console.log(numeroImpar);
        numeroImpar += 2;
    }
}

console.log(`\nSoma dos impares ${somaImpares}`);