/**
 * Entar com o número da conta e o saldo de várias pessoas. Imprimir todas as contas, os respectivos
 * saldos e uma das mensagens: positivo/negativo. Ao final, o percentual de pessoas com saldo
 * negativo. O algoritimo acaba quando se digita um numero negativo para conta.
 */

const rd = require('readline-sync');

const STATUS = {Positivo: "Positivo", Negativo: "Negativo"};

let conta = null;

class Funcionario {
    constructor(conta, saldo, status) {
        this.conta =  conta;
        this.saldo = saldo;
        this.staus = status;
    }
}

const funcionarios = [];

do {
    conta = rd.questionInt("Conta: ");

    if(conta <= -1)
        break

    let saldo = rd.questionFloat("Saldo: ");

    if(saldo > 0) {
        funcionarios.push(new Funcionario(conta, saldo, STATUS.Positivo));
    } else {
        funcionarios.push(new Funcionario(saldo, conta, STATUS.Negativo));
    }

    console.log();
} while(conta > -1);

let contNegativados = 0;

funcionarios.forEach((funcionario) => {
    if(funcionario.staus === "Negativo") {
        contNegativados++;
    }
});

let totalFunctionarios = funcionarios.length;
let porcentagemNegativados = (contNegativados / totalFunctionarios) * 100;

console.log(`\nPercentual de pessoas com saldo negativo é ${porcentagemNegativados}%.`);
