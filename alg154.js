/**
 * Criar um algoritimo que entre com uma palavra e imprima conforme o exemplo a seguir:
 * palavra: TERRA
 * 
 * A
 * RA
 * RRA
 * ERRA
 * TERRA
 */

const rd = require('readline-sync');

let palavra = rd.question("Palavra: ");

for (let i = palavra.length - 1; i >= 0; i--) {
    console.log(palavra.slice(i, palavra.length))
}