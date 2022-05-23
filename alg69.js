/**
 * Dadfo um poligono convexo de n lados, podemos calcular o número de diagonais diferentes,
 * desse poligono pela formula: nd = n (n - 3) / 2. Fazer um algoritimo que leia quantos lados
 * tem o poligono, calcule e escreva o número  de diagonais diferentes do mesmo.
 */

const rd = require('readline-sync')

let nlados = rd.questionInt("Numero de lados do poligono: ")

let ndiagonais = nlados * (nlados - 3) / 2

console.log("\nNumero de diagonais:", ndiagonais)

