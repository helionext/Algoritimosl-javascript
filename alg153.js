/**
 * Criar um algoritimo que entre com uma palavra e imprima conforme o exemplo a seguir:
 * palavra: AMOR
 * 
 * AMOR
 * AMO
 * AM
 * A
 */

const rd = require('readline-sync');

let palavra = rd.question("Palavra: ");

for (let i = palavra.length; i >= 0; i--) {
    console.log(palavra.slice(0, i))
}