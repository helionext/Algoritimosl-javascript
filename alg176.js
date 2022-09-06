/**
 * Uma das maneiras de se conseguir a raiz quadrada de um número é subtrair do numero os
 * impares consecutivos a partir de 1, até que o resultadoi da subtração seja menor
 * ou igual a zero. O número de vezes que se conseguir fazer a subtração é a raiz quadrada
 * exata(resultado 0) ou aproximada do número (resultado negativo).
 */

const rd = require('readline-sync');

let numero = rd.questionInt("Numero: ");

let raizQuadrada = 0;
let subtraidor = 1;

while(numero > 0) {
    numero -= subtraidor;

    if(numero >= 0) {
        raizQuadrada += 1;
    }

    subtraidor += 2;
}

if(numero === 0) {
    console.log(`\nRaiz: ${raizQuadrada}`);
} 