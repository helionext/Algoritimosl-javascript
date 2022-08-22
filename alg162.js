/**
 * Palindromos são palavras (frases também) que são iguais quando lidas de frente para trás
 * e de trás para frente, ignorando os espaços.
 * 
 * AME O POEMA AMOR A ROMA ATE O POETA  LUZ AZUL
 * 
 * Criar um algoritimo que possa entrar com 5 mensagens e imprimir quantas são palindromos.
 */

const rd = require('readline-sync');

let contPalindromos = 0;

for (let i = 0; i < 5; i++) {
    let mensagem = rd.question("Mensagem: ");

    if(ePalindromo(mensagem)) {
        contPalindromos++;
    }
}

/**
 * 
 * @param {string} msg 
 */
function ePalindromo(msg) {
    msg = msg.replace(/ /g, '');
    return Array.from(msg).reverse().join('') === msg;
}

console.log(`Tem ${contPalindromos} palindromos`);