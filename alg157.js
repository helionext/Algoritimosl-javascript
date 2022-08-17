/**
 * Entrar com uma mensagem e imprimir quantas letras A, E, I, O e U tem esta mensagem
 * (considerar minusculas e maiusculas);
 */

const rd = require('readline-sync');

let mensagem = Array.from(rd.question("Mensagem: ").toUpperCase());

let letras = {'A': 0, 'E': 0, 'I': 0 ,'O': 0, 'U': 0};

mensagem.map((letra) => {
    
    if(letras[letra] !== undefined) {
        letras[letra] += 1;
    }
})

console.log(letras);
