/**
 * Leia vários numeros terminados por 0 e imprima o maior, o meno e a média aritimetica. O numero
 * 0 não faz parte da sequencia.
 */

const rd = require('readline-sync');

let maior = Number.MIN_SAFE_INTEGER;
let menor = Number.MAX_SAFE_INTEGER;
const NUMEROS = [];

let numero = 0;

do {
    numero = rd.questionInt("Numero: ");

    if(numero === 0) {
        break
    }
    
    NUMEROS.push(numero);

    if(numero > maior) {
        maior = numero;
    }
    if(numero < menor) {
        menor = numero;
    }

} while(numero !== 0);

let somaTotal = NUMEROS.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

let media = somaTotal / NUMEROS.length;

console.log(`\nMenor: ${menor}`);
console.log(`Maior: ${maior}`);
console.log(`Media: ${media}`);