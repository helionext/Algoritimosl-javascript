/**
 * Uma pousada estipulou o preço para a sua diária em R$ 30.00 e mais uma taxa de serviços
 * diários de:
 * - R$ 15.00, se o número de dias for menor que 10.
 * - R$ 8.00 se o número de dias for maior ou igual a 10.
 * 
 * Criar um algoritimo que imprima nome, conta e o número da conta de cada cliente e ao final o
 * total de ganho pela pusada.
 */

const rd = require('readline-sync');
const nanoid = require('nanoid');

class Cliente {
    constructor(nome, conta, numero_da_conta) {
        this.nome = nome;
        this.conta = conta;
        this.numero_da_conta = numero_da_conta;
    }

    descricao() {
        return `Nome: ${this.nome} Conta: R$ ${this.conta.toFixed(2)} IDConta: ${this.numero_da_conta}`;
    }
}

let opcao = null;
let clientes = [];


while(opcao !== "N") {
    let nome = rd.question("Nome: ");
    let dias = rd.questionInt("Diárias: ");

    let id_conta = nanoid.nanoid(10);

    if(dias < 10) {
        let contaCalculada = dias * 15;

        clientes.push(new Cliente(nome, contaCalculada, id_conta))
    } else {
        let contaCalculada = dias * 8;

        clientes.push(new Cliente(nome, contaCalculada, id_conta))
    }
    opcao = rd.question("Deseja cadastrar mais um cliente(S/N)?").toUpperCase();
    console.log();
}

let totalGanhoDaPousada = null;
clientes.forEach((cliente) => {
    totalGanhoDaPousada += cliente.conta;
});

clientes.forEach((cliente) => {
    console.log(cliente.descricao());
});

console.log(`\nGanho total da pousada: R$ ${totalGanhoDaPousada.toFixed(2)}`);
