/**
 * Criar um algoritimo que entre com uma palavra e imprima conforme o exemplo a seguir:
 * palavra: AMOR
 * A
 * AM
 * AMO
 * AMOR
 */

const rd = require('readline-sync');

let palavra = rd.question("Palavra: ");

for (let i = 1; i <= palavra.length; i++) {
    console.log(palavra.slice(0, i));
}