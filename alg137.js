/**
 * Criar um algoritimo que leia um número da entrada, leia n números inteiros de entrada e imprima
 * o maior deles. Suponha que todos os numeros lidos sejam positivos.
 */

const rd = require('readline-sync');

let num = rd.questionInt("Com quantos numeros deseja entrar: ");

let maior = 0;

for (let i = 0; i < num; i++) {
    let valor = rd.questionInt("Entre com um valor: ");

    if(valor > maior) {
        maior = valor;
    }
}

console.log(`\nMaior: ${maior}`);