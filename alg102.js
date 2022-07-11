/**
 * Entrar com dois numeros e imprimir o maior numero (suponha numeros diferentes);
 */

const rd = require('readline-sync');

let numero1 = rd.questionInt("Numero 1: ");
let numero2 = rd.questionInt("Numero 2: ");

let maior = null;

numero1 > numero2 ? maior = numero1 : maior = numero2

console.log(maior);