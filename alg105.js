/**
 * Criar um algoritimo que leia  o nome e o total de pontos de tres finalistas de um
 * campeonato de pingue-pongue e exibir a colaboração da seguinte forma:
 * Vencedor --------------------------------- xxxx ptos
 * Segundo colocado ------------------------- xxxx ptos
 * Terceiro colocado ------------------------ xxxx ptos
 */

const rd = require('readline-sync');

let nome_1 = rd.question("Nome 1: ");
let pontos_1 = rd.questionFloat("Pontos 1: ");

console.log();

let nome_2 = rd.question("Nome 2: ");
let pontos_2 = rd.questionFloat("Pontos 2: ");

console.log();

let nome_3 = rd.question("Nome 3: ");
let pontos_3 = rd.questionFloat("Pontos 3: ");



let pontos_aux = null;
let nome_aux = null;

if(pontos_1 < pontos_2) {
    pontos_aux = pontos_1; pontos_1 = pontos_2; pontos_2 = pontos_aux;
    nome_aux = nome_1; nome_1 = nome_2; nome_2 = nome_aux;
}

if(pontos_1 < pontos_3) {
    pontos_aux = pontos_1; pontos_1 = pontos_3; pontos_3 = pontos_aux;
    nome_aux = nome_1; nome_1 = nome_3; nome_3 = nome_aux;
}

if(pontos_2 < pontos_3) {
    pontos_aux = pontos_2; pontos_2 = pontos_3; pontos_3 = pontos_aux;
    nome_aux = nome_2; nome_2 = nome_3; nome_3 = nome_aux;
}

console.log();

console.log(`Primeiro colocado: ${nome_1} -> ${pontos_1}`);
console.log(`Segundo colocado: ${nome_2} -> ${pontos_2}`);
console.log(`Terceiro colocado: ${nome_3} -> ${pontos_3}`);
