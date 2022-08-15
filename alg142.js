/**
 * A série de RICCI difere da serie de FIBONACCI porque os dois primeiros termos são fornecidos pelo 
 * usuário. Os demais termos são gerados da mesma forma que a série de FIBONACCI. Criar um
 * algoritimo que imprima os n primeiros termos da série de RICCI e asoma dos termos impressos,
 * sabendo-se que para existir esta serie serão necessários pelo menos três termos.
 */

const rd = require('readline-sync');

let primeiroTermo = rd.questionInt("Primeiro termo: ");
let segundoTermo = rd.questionInt("Segundo termo: ");
let quantidadeTermos = rd.questionInt("Quantidade de termos: ");

let ant = primeiroTermo;
let atual = segundoTermo;
let prox = 0;
let somaDosTermos = ant + atual;


for (let i = 0; i < quantidadeTermos; i++) {

    console.log(atual);
    prox = ant + atual;
    ant = atual;
    atual = prox;
    somaDosTermos += prox;
}

console.log(`\nSoma dos termos:  ${somaDosTermos}`);
