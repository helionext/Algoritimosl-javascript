/**
 * Entrar com um numero e verificar se ele é um numero primo.
 */

const rd = require('readline-sync');

let numero = rd.questionInt("Numero: ");

let contDivisores = 0;

for (let i = numero; i >= 1; i--) {
    if(numero % i === 0) {
        contDivisores += 1;
    }
}

if(contDivisores > 2) {
    console.log('Numero naõ é primo.');
} else {
    console.log("Numero é primo.")
}