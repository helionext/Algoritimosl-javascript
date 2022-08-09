/**
 * Criar um algoritimo que leia um número e imprima a soma dos números múltiplo de 5 no
 * intervalo aberto entre 1 e num.
 */

const rd = require('readline-sync');

let numero = rd.questionInt("Numero: ");

let somaMultiplosCinco = 0;

for (let i = 5; i < numero; i += 5) {
    somaMultiplosCinco += i;
}

console.log(`\nSoma múltiplos de cinco: ${somaMultiplosCinco}`);