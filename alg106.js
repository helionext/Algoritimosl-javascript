/**
 *
 */

const rd = require("readline-sync");

let jogador_1 = rd.question("Nome 1: ");
let pontos_1 = rd.questionFloat("Pontos 1: ");

console.log();

let jogador_2 = rd.question("Nome 2: ");
let pontos_2 = rd.questionFloat("Pontos 2: ");

console.log();

let jogador_3 = rd.question("Nome 3: ");
let pontos_3 = rd.questionFloat("Pontos 3: ");

let pontos_aux = null;
let nome_aux = null;

if (pontos_1 > pontos_2) {
    pontos_aux = pontos_1; pontos_1 = pontos_2; pontos_2 = pontos_aux;
    nome_aux = jogador_1; jogador_1 = jogador_2; jogador_2 = nome_aux;
}

if (pontos_1 > pontos_3) {
    pontos_aux = pontos_1; pontos_1 = pontos_3; pontos_3 = pontos_aux;
    nome_aux = jogador_1; jogador_1 = jogador_3; jogador_3 = nome_aux;
}

if (pontos_2 > pontos_3) {
    pontos_aux = pontos_2; pontos_2 = pontos_3; pontos_3 = pontos_aux;
    nome_aux = jogador_2; jogador_2 = jogador_3; jogador_3 = nome_aux;
}

let somaPontos = !!((pontos_1 + pontos_2 + pontos_3) > 100);

let mediaEquipe = somaPontos ? (pontos_1 + pontos_2 + pontos_3) / 3 : "Desclassificada";

console.log();

console.log(`Pontos Jogador 3: ${pontos_3.toFixed(2)}`);
console.log(`Pontos Jogador 2: ${pontos_2.toFixed(2)}`);
console.log(`Pontos Jogador 1: ${pontos_1.toFixed(2)}`);

if(typeof(mediaEquipe) === 'string') {
    console.log(`Equipe ${mediaEquipe}`);
} else {
    console.log(`Media equipe: ${mediaEquipe.toFixed(2)}`);
}