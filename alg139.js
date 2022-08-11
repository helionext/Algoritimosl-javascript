/**
 * Criar um algoritimo que leia a quantidade de númeors que se deseja digitar para que
 * possa ser impresso o maior e o menor número digitados. Não suponha que todos os números lidos
 * serão positivos.
 */

const rd = require('readline-sync');

let num = rd.questionInt("Com quantos numeros deseja entrar: ");

let maior = Number.MIN_SAFE_INTEGER;
let menor = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < num; i++) {
    let valor = rd.questionInt("Entre com um valor: ");

    if(valor > maior) {
        maior = valor;
    }

    if(valor < menor) {
        menor = valor;
    }
}

console.log(`\nMaior: ${maior}`);
console.log(`Menor: ${menor}`);