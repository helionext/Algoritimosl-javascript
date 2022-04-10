const rd = require('readline-sync');

let saldoAplicacao = rd.questionFloat("Saldo da aplicação: ");

const novoSaldo = saldoAplicacao * 1.01;

console.log(`\nNovo saldo: R$ ${novoSaldo}`);