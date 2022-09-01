/**
 * Criar um algoritimo que leia uma sequencia de números terminada por 0 e imprima o número
 * que for múltiplo de sua posição na sequencia. Exemplo:
 * valores lidos: 3   7   8  16
 * posição:       1   2   3  4
 * impressão:     3   16
 */

const rd = require('readline-sync');

let numero = null;
let contPosicao = 1;

do {
    numero = rd.questionInt('Numero: ');

    if(numero % contPosicao === 0) {
        console.log(numero);
    }

    contPosicao++;

} while(numero !== 0);
