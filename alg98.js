/**
 * Entrar com um nome e imprimi-lo se o primeiro caractere for a letra 'a' (Considerar maiscula e 
 * minuscula)
 */

const rd = require('readline-sync');

let nome = rd.question("Nome: ");

if(nome[0].toLowerCase() === "a") {
    console.log(`\n${nome}`)
}