/**
 * Criar um algoritimo que entre com o valor de x, calcule e imprima o valor f(x)
 * f(x) = 8 / 2 - x
 */

const rd = require('readline-sync');

let x = rd.questionFloat("Digite o valor de x: ");


if(x !== 2.) {
    let fx = 8 / (2 - x);
    console.log('\nf(x)= %d', fx)
} else {
    console.log('\nNão pode ser feita')
}