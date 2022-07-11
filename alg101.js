/**
 * Ler dois numeros e imprimir uma mensagem dizendo se sao iguais ou diferentes.
 */

const rd = require('readline-sync');

let numero1 = rd.questionInt("Numero 1: ");
let numero2 = rd.questionInt("Numero 2: ");

if(numero1 === numero2) {
    console.log('Iguais')
} else {
    console.log('Diferentes')
}