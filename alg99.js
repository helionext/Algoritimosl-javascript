/**
 * Entrar com o nome de uma pessoa e só imprimi-lo se o prenome for JOSÉ
 */

const rd = require('readline-sync');

let nomeCompleto = rd.question("Nome completo: ");

let nome = nomeCompleto.split(' ')[0];

if(nome.toLowerCase() === 'josé') {
    console.log(`\n${nome}`)
}