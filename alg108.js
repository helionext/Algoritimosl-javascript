/**
 * Criar um algoritimo que entre com o valor de x, calcule e imprima o valor de f(x).
 * f(x) = 5 * x + 3 / Sqrt(x ** 2) - 16
 */

const rd = require('readline-sync');

let x = rd.questionFloat("Valor de x: ");

if(x > 4. || x < (-4.)) {
    let fx = (5 * x + 3) / Math.sqrt(x ** 2 - 16);
    console.log(`\nf(x) = ${fx}`);
} else {
    console.log(`Não pode ser feita`);
}