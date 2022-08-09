/**
 * Criar um algoritimo que leia um número que servirá para controlar os números pares que serão impressos
 * a partir do número 2.
 */

const rd = require('readline-sync');

let controlador = rd.questionInt("Quantos números pares voçe quer? ");

let numeroPar = 2;

for (let i = 0; i < controlador; i++) {
    console.log(numeroPar);
    numeroPar += 2;
}