/**
 * Criar um algoritimo que entre com uma palavra e imprima conforme o exemplo a seguir:
 * palavra: PAZ
 * P
 * A
 * Z
 */

const rd = require('readline-sync');

let palavra = rd.question("Palavra: ");

for (let i = 0; i < palavra.length; i++) {
    console.log(palavra[i]);
}