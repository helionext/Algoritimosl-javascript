/**
 * Criar um algoritimo que entre com uma palavra e imprima conforme o exemplo a seguir:
 * palavra: PAZ
 * ZAP
 */

const rd = require('readline-sync');

let palavra = rd.question("Palavra: ");

let novaPalavra = '';
for (let i = palavra.length - 1; i >= 0; i--) {
    novaPalavra += palavra[i];
}

console.log(novaPalavra);