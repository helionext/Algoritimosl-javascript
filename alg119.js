/**
 * Criar um algoritimo que Calcule e imprima o valor de b ** n. O valor de n deverá ser maior do que 1
 * e inteiro e o valor de b maior ou igual a 2 e inteiro.
 */

const rd = require('readline-sync');

let base = rd.questionInt("base: ");
let expo = rd.questionInt("expoente: ");


if(base > 1 && expo > 2) {
    let pot = 1;

    for (let i = 1; i <= expo; i++) {
        pot = pot * base;
    }
    console.log(`\nPotencia: ${pot}`)
} else {
    console.log("\nNão satisfazem");
}