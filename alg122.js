/**
 * Entrar com um nome, idade e sexo de 5 pessoas. Imprimir o nome se a pessoa for do
 * sexo masculino e tiver mais de 21 anos.
 */

const rd = require('readline-sync');

let pessoasSelecionadas = [];

for (let i = 0; i < 5; i++) {
    let nome = rd.question("Nome: ");
    let idade = rd.questionInt("Idade: ");
    let sexo = rd.question("Sexo [M/F]: ").toUpperCase();

    if(sexo === "M" && idade > 21) {
        pessoasSelecionadas.push([nome, idade, sexo]);
    }

    console.log();
}

console.log("------------------------------------------------------");

pessoasSelecionadas.forEach((pessoa) => {
    console.log(`Nome: ${pessoa[0]}`);
    console.log(`Idade: ${pessoa[1]}`);
    console.log(`Sexo: ${pessoa[2]}`);
    console.log();
})
