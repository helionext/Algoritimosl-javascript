/**
 * Criar um algoritimo que leia um valor de hora e informe quantos minutos
 * se passaram desde o inicio do dia.
 */

const rd = require("readline-sync");

let hora_atual = rd.question("Que horas são agora (Ex:. 22:12): ");

let horas = Number(hora_atual.substring(0, 2))
let minutos = Number(hora_atual.substring(3))

const MINUTOS = horas * 60 + minutos;

console.log("\nAte agora se passaram %d minutos", MINUTOS);
