/**
 * Criar um algoritimo que leia os limites inferior e superior de um intervalo e imprima todos
 * os números naturais no intervalo fechado. Suponha que os dados digitados são para um intervalo
 * crescente.
 */

const rd = require('readline-sync');

let inferior = rd.questionInt("Limite inferior: ");
let superior = rd.questionInt("Limite superior: ");

if(inferior < superior) {
    for (;inferior <= superior; inferior++) {
        console.log(inferior)
    }
} else {
    console.log(`Superior deve ser maior que inferior.`);
}