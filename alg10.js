const rd = require("readline-sync");

let data = rd.questionInt("Digite data no formato ddmmaa: ");

let dia = parseInt(data / 10000);
let mes = parseInt(data % 10000 / 100);
let ano = parseInt(data % 100);

let novaData = mes * 10000 + dia * 100 + ano;

console.log("Nova data:",novaData);