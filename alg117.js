/**
 * Criar um algoritimo que imprima todos os números de 1 até 100 e a soma deles.
 */

let soma = 0;
for (let i = 1; i <= 100; i++) {
    soma += i;
    console.log(i);
}

console.log(`\nSoma: ${soma}`);