/**
 * Entrar com 5 nomes e imprimir quantas letras tem em cada nome
 */

const rd = require('readline-sync');

let variosNomes = [];

for (let i = 0; i < 8; i++) {
    let nome = rd.question("Nome: ");

    variosNomes.push({nome: nome, tamanho: nome.length});
}

console.log();

variosNomes.forEach((nome) => {
    console.log(`Nome: ${nome.nome} Tamanho: ${nome.tamanho}`);
})