/**
 * Criar um algoritimo que deixe escolhe qual a tabuada de multiplicar que se deseja
 * imprimir: 
 */

const rd = require('readline-sync');

let tabuada = rd.questionInt("Qual tabuada deseja imprimir: ");

for (let i = 1; i <= 10; i++) {
    console.log(`${i} * ${tabuada} = ${i * tabuada}`);
}