/**
 * Calcule o produto de dois numeros lidos. Suponha que os números lidos sejam positivos e que 
 * o multiplicando seja menor do que o multiplicador.
 */

const rd = require('readline-sync');

let multiplicador = rd.questionInt("Multiplicador: ");
let multiplicando = rd.questionInt("Multiplicando: ");

let produto = 0;

for (let i = 0; i < multiplicador; i++) {
    produto += multiplicando;
}

console.log(`\nProduto: ${produto}`);
