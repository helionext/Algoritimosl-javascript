/**
 * Criar um algoritimo que leia os limites inferior e superior de um intervalo e imprima todos os
 * números múltiplos de 6 no intervalo fechado. Suponha que os dados digitados são para um intervalo
 * crescente.
 */

const rd = require('readline-sync');

let inferior = rd.questionInt("Inferior: ");
let superior = rd.questionInt("Superior: ");

if(inferior < superior) {
    for (; inferior < superior; inferior++) {
        if(inferior % 6 === 0) {
            console.log(inferior);
        }
    }
} else {
    console.log("Inferior deve ser maior do que superior: ");
}

