/**
 * Entrar com quantos numeros o usuario quiser até que ele digite 0.
 * Imprimir quantos numeros são pares e quantos são impares.
 */

const rd = require('readline-sync');

let impares = [];
let pares = [];
let numero = null;

do {
    numero = rd.questionInt("Entre com numero (0 zero para sair): ");

    if(numero % 2 === 0) {
        pares.push(numero);
        continue;
    }

    impares.push(numero);

} while(numero !== 0);

pares.pop();

console.log();
console.log(`Foram digitados ${impares.length} impares`);
console.log(`Foram digitados ${pares.length} pares`);