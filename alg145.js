/**
 * Entar com um numero e imprimir todos os seus divisores.
 */

const rd = require('readline-sync');

let numero = rd.questionInt("Entre com um numero: ");

for (let i = numero; i >= 1; i--) {
    if(numero % i === 0) {
        console.log(i);
    }
}