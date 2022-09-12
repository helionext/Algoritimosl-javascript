/**
 * Criar um algoritimo que entere com valores inteiros para uma matriz m 3 x 3 e imprima
 * a matriz final, conforme a seguir:
 * 
 * 1 2 3       9 8 7
 * 4 5 6       6 5 4
 * 7 8 9       3 2 1
 */

const rd = require('readline-sync');

let primeiraLinha = rd.question("Primeira linha: ");
let segundaLinha = rd.question("Segunda linha: ");
let terceiraLinha = rd.question("Terceira linha: ");

let matriz = [primeiraLinha.split(' ').map((x) => parseInt(x)), segundaLinha.split(' ').map((x) => parseInt(x)), terceiraLinha.split(' ').map((x) => parseInt(x))];

console.table(matriz);
console.log(matriz);
console.log(matriz.length);
let newMatriz = [];

for (let i = matriz.length - 1; i >= 0; i--) {
    let matrizAux = []
    for (let j = matriz[i].length - 1; j >= 0; j--) {
        
        matrizAux.push(matriz[i][j]);
    }

    newMatriz.push(matrizAux);
}

console.log();

console.table(newMatriz);