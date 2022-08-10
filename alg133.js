/**
 * Criar um algoritimo que leia os limites inferior e superior de um intervalo e o número cujos
 * múltiplos se deseja que sejam impressos no intervalo aberto e seu somatorio. Suponha que os dados digitados 
 * são para um intervalo crescente.
 */

const rd = require('readline-sync');


let inferior = rd.questionInt("Inferior: ");
let superior = rd.questionInt("Superior: ");
let multiplo = rd.questionInt("Numero multiplo: ");

inferior++;
let somaMultiplosSeis = 0;

if(inferior < superior) {
    for (;inferior < superior; inferior++) {
        if(inferior % multiplo === 0) {
            somaMultiplosSeis += inferior;
            console.log(inferior);
        }
    }
} else {
    console.log("Inferior deve ser maior do que superior: ");
}

console.log(`\nSoma dos múltiplos de 6: ${somaMultiplosSeis}`);