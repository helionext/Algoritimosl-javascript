/**
 * Entrar com o numero de vezes que se deseja imprimir a palavra SOL e imprimir
 */

const rd = require('readline-sync');

let vezes = rd.questionInt("Quantas vezes voçe que imprima a palavra SOL: ");

for (let i = 0; i < vezes; i++) {
    console.log('SOL');
}