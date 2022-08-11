/**
 * Criar um algoritimo que leia um número (num) da entrada. Em seguida, ler n números de entrada
 * e imprimir o triplo de cada número.
 */

const rd = require('readline-sync');

let num = rd.questionInt("Com quantos numeros deseja entrar: ");

for (let i = 0; i < num; i++) {
    let valor = rd.questionInt("Entre com um valor: ");

    let triplo = valor * 3;
    console.log(`Triplo: ${triplo}`);
    console.log();
}
