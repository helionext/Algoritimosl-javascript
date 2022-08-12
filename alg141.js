/**
 * Criar um algoritimo que imprima os 10 primeiros termos da série de Fibonnaci.
 */

let ant = 0;
let atual = 1;
let prox = 0;

for (let i = 0; i < 10; i++) {
    console.log(atual);
    prox = ant + atual;
    ant = atual;
    atual = prox;
}