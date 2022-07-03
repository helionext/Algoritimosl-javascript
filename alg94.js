/**
 * Entrar com o ano de nascimento de uma pessoa e o ano atual. Impimir a idade da pessoa.
 * Não se esqueça de verificar se o ano de nascimento é uma ano válido.
 */

const rd = require('readline-sync');

let anoNascimento = rd.questionInt("Ano de nascimento: ");
let anoAtual = rd.questionInt("Ano atual: ");

let idade = null;

anoAtual > anoNascimento ? idade = anoAtual - anoNascimento : idade = null;

idade !== null ? console.log(`\nSua idade é ${idade} anos.`) : 
                console.log(`\nIdade de nascimento é maior que ano atual.`);

