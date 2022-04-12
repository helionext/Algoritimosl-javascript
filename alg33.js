const rd = require('readline-sync');

let nome = rd.question("Digite seu nome completo: ");

console.log("\nNome:", nome)
console.log(`Primeiro caracteres: ${nome[0]}`)
console.log(`Ultimo caractere: ${nome[nome.length - 1]}`)
console.log(`Primerio ao terceiro: ${nome.substring(0, 3)}`)
console.log(`Quarto caractere: ${nome[3]}`)
console.log(`Todos menos o primeiro: ${nome.substring(1)}`)
console.log(`Os dois ultimos: ${nome.substring(nome.length - 2)}`)