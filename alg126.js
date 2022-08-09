/**
 * Criar um algoritimo que leia um número e imprima todos os números de 1 até o numero lido 
 * e o seu produto.
 */

const rd = require('readline-sync');

let numero = rd.questionInt("Numero: ");

let produto = 1;

for (let i = 1; i <= numero; i++) {
    console.log(i);
    produto *= i;
}

console.log(`\nProduto: ${produto}`);