/**
 * Sabendo-se que algumas linguagens calcula a divisão através de subtrações sucessivas, criar um
 * algoritimo que calcule/imprima o resto dad divisão de números inteiros lidos. Suponha que os
 * números lidos sejam positivos e que o dividendo seja maior que o divisor.
 */

const rd = require('readline-sync');

let dividendo = rd.questionInt("Dividendo: ");
let divisor = rd.questionInt("Divisor: ");

let resto = null;

while(dividendo >= 0) {

    resto = dividendo;
    dividendo -= divisor;
    if(dividendo >= 0) {
        resto = dividendo;
    }
}

console.log(`\nResto: ${resto}`);