/**
 * Entrar com um nume e imprimir uma das mensagens: maior do que 20, igual a 20 ou menor do que 20.
 */

const rd = require('readline-sync');

let numero = rd.questionInt("Entre com numero: ");

if(numero > 20) {
    console.log("Maior do que 20.");
} else if(numero < 20) {
    console.log("Menor do que 20.")
} else {
    console.log("Igual a 20.");
}