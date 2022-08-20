/**
 * Entar com uma mensagem e criptografa-la da seguinte maneira:
 * A - X; E - Y; I - W; O - K; U - Z
 * 
 */

const rd = require('readline-sync');

let mensagem = rd.question("Mensagem: ").toUpperCase();

for (let i = 0; i < mensagem.length; i++) {
    if(mensagem[i] === "A") {
        mensagem = mensagem.replace("A", "X");
    } else if(mensagem[i] === "E") { 
        mensagem = mensagem.replace("E", "Y");
    } else if(mensagem[i] === "I") {
        mensagem = mensagem.replace("I", "W");
    } else if(mensagem[i] === "O") {
        mensagem = mensagem.replace("O", "K");
    } else if(mensagem[i] === "U") {
        mensagem = mensagem.replace("U", "Z");
    }
}

console.log(`Mensagem criptografada: ${mensagem}`);

