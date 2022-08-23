/**
 * Chico tem 1.50m e cresce 2 centimetros por ano, enquanto Juca tem 1.10m e cresce 3 centimetros
 * por ano. Construir um algoritimo que calcule e imprima quantos anos serão necessários para que
 * Juca seja maior que Chico.
 */

let chico = 1.50;
let juca = 1.10;

let contAnos = 0;

while(juca < chico) {
    juca += 0.03;
    chico += 0.02;
    contAnos++;
}

console.log(`Será necessário ${contAnos} para que Juca passe de Chico em altura.`);