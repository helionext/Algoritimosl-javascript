/**
 * Criar um algoritimo que leia um número da entrada e imprima os múltiplos de 3 e 5 ao mesmo tempo no
 * intervalo de 1 a num.
 */

const rd = require('readline-sync');

let num = rd.questionInt("Numero: ");

for (let i = 1; i < num; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}