/**
 * Criar um algoritimo que leia um numero que será o limite superior de um intervalo e o incremento.
 * Imprimir todos os números naturais no intervalo de 0 até esse número. Suponha que os dois númeors lidos
 * são maiores do que zero. Exemplo:
 * Limite superior: 20
 * Incremento: 5
 */

const rd = require('readline-sync');

let limiteSuperior = rd.questionInt("Limite superior: ");
let incremento = rd.questionInt("Incremento: ");

if(incremento < limiteSuperior) {
    for (let i = 0; i <= limiteSuperior; i += incremento) {
        console.log(i);
    }
}