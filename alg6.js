const rd = require("readline-sync")

let palavra1 = rd.question("Digite palavra 1: ");
let palavra2 = rd.question("Digite palavra 2: ");

console.log("Tamanho palavra1:", palavra1.length);
console.log("Concatenando:", palavra1.concat(palavra2));

let palavra3 = palavra1.substring(0, palavra1.length);

palavra4 = palavra1.concat(palavra2);

console.log("Concatenacao:", palavra4);
console.log("\nPrimeiro caractere:", palavra1[0]);
console.log("Ultimo caractere:", palavra1[palavra1.length - 1]);
console.log("Todos menos o primeiro:", palavra1.slice(1));
console.log("O terceiro elemento:", palavra1[2]);
console.log("Os tres primeiros elementos:", palavra1.slice(0,3));
console.log("Os tres ultimos elementos:", palavra1.slice(palavra1.length - 3));