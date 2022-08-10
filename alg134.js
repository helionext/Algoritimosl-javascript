/**
 * Criar um algoritimo que leia os limites inferior e superior de um intervalo e imprima todos
 * os números pares no intervalo aberto e seu somatório. Suponha que os dados digitados
 * são para um intervalo crescente.
 */

const rd = require('readline-sync');


let inferior = rd.questionInt("Inferior: ");
let superior = rd.questionInt("Superior: ");


inferior = inferior % 2 === 0 ? inferior : inferior++;
let somaPares = 0;

if(inferior < superior) {
    for (;inferior < superior; inferior += 2) {
        console.log(inferior)
        somaPares += inferior;
    }
} else {
    console.log("Inferior deve ser maior do que superior: ");
}

console.log(`\nSoma dos pares: ${somaPares}`);