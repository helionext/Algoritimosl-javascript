/**
 * Um restaurante faz uma promoção semanal de descontos, para clientes de acordo
 * com as iniciais do nome da pessoa. Criar um algoritimo que leia o primeiro nome
 * do cliente, o valor de sua conta e se o nome iniciar com as letras A,D,M, ou S, dar
 * um desconto de 30%. Para o cliente cujo nome não se inicia por nenhuma dessas exibir
 * a mensagem "Que pena. Nesta semana o desconto não é para o seu nome; Mas continue nos prestigiando
 * que sua vez chegará".
 */

const rd = require('readline-sync');

let nome = rd.question("Seu nome: ");

let valorConta = rd.questionFloat("Valor da conta: ");

let letraInicial = nome[0].toUpperCase();
let letrasDesconto = ['A','D', 'M', 'S'];

let desconto = 0.0;

if(letrasDesconto.includes(letraInicial)) {
    desconto = valorConta * 0.30;
}

let contaComDesconto = valorConta - desconto;

console.log();

if(desconto) {
    console.log(`Parabens voçe recebeu um desconto de 30%.`);
    console.log(`Conta: R$ ${valorConta.toFixed(2)}`);
    console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
    console.log(`Valor conta com desconto: R$ ${contaComDesconto.toFixed(2)}`);
} else {
    console.log('Que pena. Nesta semana o desconto não é para o seu nome.');
    console.log(`Conta: R$ ${valorConta.toFixed(2)}`);
}