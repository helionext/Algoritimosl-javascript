/**
 * Criar um algoritimo que leia um número que será o limite superior de um intervalo
 * e imprimir todos os números impares menores do que esse número.
 */

const rd = require('readline-sync');

let limiteSuperior = rd.questionInt("Limite superior: ");

if(limiteSuperior > 0) {
    for (let i = limiteSuperior - 1; i > 0; i--) {
        if(i % 2 !== 0) {
            console.log(i);
        }
    }
}