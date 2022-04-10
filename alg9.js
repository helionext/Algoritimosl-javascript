const rd = require('readline-sync');

let numero = parseInt(rd.question("Numero de tres casas decimais: "));

let dezenas = parseInt(numero % 100 / 10);

console.log("Dezenas:", dezenas);