/**
 * Entrar com o valor de x e imprimir y:
 *          |1, se x <= 1
 *          |2, se 1 < x <= 2
 *          |x ** 2, se 2 < x <= 3
 * Y = f(x) |x ** 3, se x > 3
 *          |
 *          |
 */

const rd = require('readline-sync');

let x = rd.questionFloat("Valor de x: ");

let y = 0;

if(x <= 1) {
    y = 1;
} else if(x > 1 && x <= 2) {
    y = 2;
} else if(x > 2 && x <= 3) {
    y = x ** 2;
} else {
    y = x ** 3;
}

console.log(`\nf(x): ${y}`)