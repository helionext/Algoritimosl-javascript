/**
 * Criar um algoritimo que receba a idade e o peso de 10 pessoas. Calcular e imprimir as médias dos
 * pesos das pessoas da mesma faixa etária. As faixas etárias são: de 1 a 10 anos, de 11 a 20 anos,
 * de 21 a 30 anos e maiores de 30 anos.
 */

const rd = require('readline-sync');

let pessoas = [];

for (let i = 0; i < 6; i++) {
    let nome = rd.question("Nome: ");
    let idade = rd.questionInt("Idade:");
    let peso = rd.questionFloat("Peso: ");

    pessoas.push({nome, idade, peso});
    console.log();
}

let de1a10 = {soma: 0, quantidadePessoas: 0};
let de11a20 = {soma: 0, quantidadePessoas: 0};
let de21a30 = {soma: 0, quantidadePessoas: 0};
let maisDe30 = {soma: 0, quantidadePessoas: 0};

pessoas.forEach((pessoa) => {
    if(pessoa.idade >= 1 && pessoa.idade <= 10) {
        de1a10.soma += pessoa.peso;
        de1a10.quantidadePessoas += 1;
    } else if(pessoa.idade > 10 && pessoa.idade <= 20) {
        de11a20.soma += pessoa.peso;
        de11a20.quantidadePessoas += 1;
    } else if(pessoa.idade > 20 && pessoa.idade <= 30) {
        de21a30.soma += pessoa.peso;
        de21a30.quantidadePessoas += 1;
    } else {
        maisDe30.soma += pessoa.peso;
        maisDe30.quantidadePessoas += 1;
    }
})

de1a10['media'] = Math.round(de1a10.soma / de1a10.quantidadePessoas) || 0;
de11a20['media'] = Math.round(de11a20.soma / de11a20.quantidadePessoas) || 0;
de21a30['media'] = Math.round(de21a30.soma / de21a30.quantidadePessoas) || 0;
maisDe30['media'] = Math.round(maisDe30.soma / maisDe30.quantidadePessoas) || 0;

console.log(`Media de 1 a 10: ${de1a10.media}`);
console.log(`Media de 11 a 20: ${de11a20.media}`);
console.log(`Media de 21 a 30: ${de21a30.media}`);
console.log(`Media mais de 30: ${maisDe30.media}`);