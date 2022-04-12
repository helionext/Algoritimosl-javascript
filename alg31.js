const rd = require('readline-sync');

let num, c, d, u, newNum;

num = rd.questionInt("Numero de tres algarismos: ");

c = parseInt(num / 100);
d = parseInt(num % 100 / 10);
u = parseInt(num % 10);

newNum = u * 100 + d * 10 + c;

console.log("Número invertido: ", newNum);
