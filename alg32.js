const rd = require('readline-sync');

let salarioMinimo = rd.questionFloat("Salario minimo: ");
let quantQuilowatts = rd.questionFloat("Quantidade de quilowatts: ");

let valorCadaQuilowatts = (salarioMinimo / 7) / 100;
let contaDeEnergia = valorCadaQuilowatts * quantQuilowatts;
let contaDeEnergiaComDesconto = contaDeEnergia * 0.90;

console.log("\nValor cada quillowatts: R$", valorCadaQuilowatts.toFixed(2));
console.log("Conta de energia: R$", contaDeEnergia.toFixed(2));
console.log("Conta com desconto 10%: R$", contaDeEnergiaComDesconto.toFixed(2));