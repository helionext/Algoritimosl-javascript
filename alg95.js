/**
 * Entrar com nome, sexo e idade de uma pessoa. Se a pessoa for do sexo feminino e tiver menos que
 * 25 anos, imprimir nome e a mensagem: Aceita. Caso contrário, imprimir nome e a mensagem: Não ACEITA
 * Considere (f ou F)
 */

const rd = require('readline-sync');

let nome = rd.question("Nome: ");
let idade = rd.questionInt("Idade: ");
let sexo = rd.question("Sexo (m/f): ");

console.log();

if(idade < 25 && (sexo === "f" || sexo === "F")) {
    console.log("Aceita!");
} else {
    console.log("Não aceita!")
}