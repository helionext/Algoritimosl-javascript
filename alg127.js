/**
 * Criar um algoritimo que imprima a soma dos números pares entre 25 e 200.
 */

const rd = require('readline-sync');

let soma = 0;

for (let i = 26; i <= 200; i += 2) {
    soma += i;
}

console.log(`Soma: ${soma}`);