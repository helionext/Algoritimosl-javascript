/**
 * No dia da estreia do filme "O Senhor dos Aneis", uma grande emissora de TV realizou
 * uma pesquisa logo aós o encerramento do filme. Cada espectador respondeu a um questionario
 * no qual constava sua idade e a sua opnião em relação ao filme:
 * excelente - 3; bom - 2; regular - 1. Criar um algoritimo que receba a idade e a opnião de 
 * 20 espectadores, calcule e imprima;
 * 
 * - A media das idades das pessoas que responderam excelente;
 * - A quantidade de pessoas que responderam regular;
 * - A percentagem de pessoas que responderam bom entre todos os expectadores analisados.
 */

const rd = require('readline-sync');

let quantidadePessoasExcelente = 0;
let mediaExcelente = 0;
let quantidadeRegular = 0;
let porcentagemBomEntreTodos = 0;
let total = 0;
let loop = null;
let somaIdadesExcelente = 0;

do{
    total += 1;
    let idade = rd.questionInt("Idade: ");

    console.log("[1] Regular");
    console.log("[2] Bom");
    console.log("[3] Excelente");
    let opniao = parseInt(rd.question("Opniao: ", {limit: ['1', '2', '3']}));

    loop = rd.question("Deseja sair [S/N]: ").toUpperCase();
    console.log();

    if(opniao === 1) {
        quantidadeRegular += 1;
    } else if (opniao === 2) {
        porcentagemBomEntreTodos += 1;
    } else {
        somaIdadesExcelente += idade;
        quantidadePessoasExcelente += 1;
    }
} while(loop === "N");


porcentagemBomEntreTodos = (porcentagemBomEntreTodos * (total / 100)) * 100;
mediaExcelente = (somaIdadesExcelente / quantidadePessoasExcelente) || 0;

console.log(`Opnião regular: ${quantidadeRegular}`);
console.log(`Porcentagem Bom: ${porcentagemBomEntreTodos}%`);
console.log(`Media idade Excelente: ${mediaExcelente}`);