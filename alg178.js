/**
 * Na Usina de Angra dos Reis, os técnicos analisama perda de passa de um material radioativo.
 * Sabendo-se que este perde 25% de sua massa a cada 30 segundos, criar um algoritimo que imprima
 * o tempo necessário para que a massa deste material se torne menor que 0.10 grama. O algoritimo
 * pode calcular o tempo para varias massas.
 */

const rd = require('readline-sync');

let opcao = null;
let contSegundos = 0;

while(opcao !== 'N') {
    let massa = rd.questionFloat("Massa (mg):");

    while(massa >= 0.10) {
        massa *= 0.75;
        contSegundos++;
    }

    let tempoDegradacaoMassa = (contSegundos * 30) / 60;
    let minutos = Math.trunc(tempoDegradacaoMassa);
    let segundos = Math.trunc((tempoDegradacaoMassa - minutos) * 10);

    console.log(`\nA massa demorou ${minutos} minutos e ${segundos} segundos`);
    opcao = rd.question("\nDeseja calcular mais uma massa(S/N)?").toUpperCase();

    contSegundos = 0;
}