const rd = require('readline-sync')

let prestacao, valor, taxa, tempo;

valor = rd.questionFloat("Valor da prestacao: ")
taxa = rd.questionFloat("Taxa: ")
tempo = rd.questionInt("Tempo: ")

prestacao = valor + (valor * (taxa / 100) * tempo)

console.log("\nValor da prestacao em atraso: R$ " + prestacao.toFixed(2))

