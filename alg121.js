/**
 * Criar um algoritimo que imprima a tabela de conversao de graus celcius-farenheit para o 
 * intervalo desejado pelo usuário. O algoritimo deve solicitar ao usuário o limite superior,
 * o limite inferior do intervalo e o decremento.
 */

const rd = require('readline-sync');

let inferior = rd.questionInt("Limite inferior: ");
let superior = rd.questionInt("Limite superior: ");
let decremento = rd.questionInt("Decremento: ");

if(inferior < superior && decremento > 0 && decremento < superior) {
    for (;superior >= inferior; superior -= decremento) {
        console.log(`Celcius ${superior} -> Farenheit ${(superior * 1.8 + 32).toFixed(2)}`);
    }
} else {
    console.log(`Com estes valores não podemos fazer os calculos!Observe os valores pedidos!`);
}
