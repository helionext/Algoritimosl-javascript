/**
 * Faça um algoritimo que entre com varios numeros e imprima quantos numeros primos foram 
 * inseridos. O algoritimo termina quando se digita 0.
 */

const rd = require('readline-sync');

let contDivisores = 0;
let contPrimos = 0;

let numero = null;
do {
    numero = rd.questionInt("Numero: ");

    for (let i = numero; i >= 1; i--) {
        if(numero % i === 0) {
            contDivisores += 1;
        }
    }

    if(contDivisores === 2)
        contPrimos++;

    contDivisores = 0;

} while(numero !== 0);

console.log(`\nHá ${contPrimos} números primos.`)