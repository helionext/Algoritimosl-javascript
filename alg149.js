/**
 * Entrar com um nome e imprimi-lo tantas vezes quantos forem os seus caracteres.
 */

const rd = require('readline-sync');

let nome = rd.question("Nome: ");

for (let i = 0; i < nome.length; i++) {
    console.log(nome);    
}