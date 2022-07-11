/**
 * Entrar com um algoritimo que entre com dois nomes e imprima em ordem alfabetica.
 */

const rd = require('readline-sync');

let nome1 = rd.question("Nome 1: ");
let nome2 = rd.question("Nome 2: ");

console.log();

if(nome1 < nome2) {
    console.log(nome1);
    console.log(nome2);
} else {
    console.log(nome2);
    console.log(nome1);
}