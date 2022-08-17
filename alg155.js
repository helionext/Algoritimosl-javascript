/**
 * Entar com o nome e salário de algumas pessoas. Imprimir nome e o valor da aliquota do impoto 
 * de renda:
 * salario menor que R$ 600,00              - Isento
 * salario >= R$ 600,00 e < R$ 1500,00      - 10% do salário bruto
 * salario >= R$ 1500                       - 15% do salario bruto
 */

const rd = require('readline-sync');

let pessoas = [];
let resp = null;

do{
    let nome = rd.question("Nome: ");
    let salario = rd.questionFloat("Salario: ");

    let impostoRenda = calcularImpostoRenda(salario);
    pessoas.push({nome: nome, salario: salario, impostoRenda: impostoRenda});

    console.log();
    resp = rd.question('Deseja cadastrar [S/N]: ').toLowerCase();
    console.log();
} while(resp === 's');

function calcularImpostoRenda(salario) {
    if(salario > 0 && salario <= 600.00) {
        return 0.0;
    } else if(salario <= 1500.00) {
        return salario * 0.10;
    } else {
        return salario * 0.15;
    }
}

pessoas.forEach((pessoa) => {
    console.log(`Nome: ${pessoa.nome} Salario: ${pessoa.salario.toFixed(2)} Imposto de Renda: ${pessoa.impostoRenda.toFixed(2)}`);
})
