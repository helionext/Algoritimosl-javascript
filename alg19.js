const rd = require('readline-sync');

let nome = rd.question("Nome: ");
let endereco = rd.question("Endereço: ");
let telefone = rd.question("Telefone: ");

console.log(`\nNome: ${nome}`);
console.log(`Endereço: ${endereco}`);
console.log(`Telefone: ${telefone}}`);

