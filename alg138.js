/**
 * Criar um algoritimo que leia um número da entrada (num), leia n números inteiros de entrada
 * e imprima o maior deles. Não suponha que todos os números lidos serão positivos
 */

const rd = require('readline-sync');

let num = rd.questionInt("Com quantos numeros deseja entrar: ");

let maior = Number.NEGATIVE_INFINITY;

for (let i = 0; i < num; i++) {
    let valor = rd.questionInt("Entre com um valor: ");

    if(valor > maior) {
        maior = valor;
    }
}

console.log(`\nMaior: ${maior}`);