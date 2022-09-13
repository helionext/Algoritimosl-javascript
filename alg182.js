/**
 * Criar um algoritimo que ajude o DETRAN a saber o total de recursos que foram arrecadados
 * com a aplicação de multas de trânsito.
 * 
 * O algoritimo dever ler as seguintes informações para cada motorista:
 * - numero da carteira de motorista (de 1 a 4327)
 * - número de multas
 * - valor de cada uma das multas
 * 
 * Deve ser impresso o valor da divida para cada motorista e ao final da leitura, o total de recursos
 * arrecadados (somatório de todas as multas). O algoritimo deverá imprimir também o número da
 * carteira do motorista que obteve o maior número de multas.
 */

const rd = require('readline-sync');

class Motorista {
    constructor(numero_carteira_motorista, numero_multas, todas_multas) {
        this.numero_carteira_motorista = numero_carteira_motorista;
        this.numero_multas = numero_multas;
        this.todas_multas = todas_multas;
    }

    divida() {
        console.log(`Numero carteira: ${this.numero_carteira_motorista} Total multas: R$ ${this.calcularTotalMultas().toFixed(2)}`);
    }

    calcularTotalMultas() {
        let totalMultas = 0;
        this.todas_multas.forEach(multa => {
            totalMultas += multa;
        });

        return totalMultas;
    }
}

let numero_carteira_motorista = null;
const motoristas = [];

while(numero_carteira_motorista !== 0) {
    let numero_carteira_motorista = rd.questionInt("Numero carteira de motorista: ");

    if(!(numero_carteira_motorista >= 1 && numero_carteira_motorista <= 4327) && numero_carteira_motorista !== 0) {
        console.log("O numero da carteira de motorista deve ser de 1 a 4327");
        numero_carteira_motorista = rd.questionInt("Numero carteira de motorista: ");
    } else if(numero_carteira_motorista === 0) {
        break;
    }

    let numero_multas = rd.questionInt("Numero de multas: ");

    const arrayMultas = [];

    for (let i = 0; i < numero_multas; i++) {
        let valor_multa = rd.questionFloat("Valor multa: ");
        arrayMultas.push(valor_multa);    
    }

    motoristas.push(new Motorista(numero_carteira_motorista, numero_multas, arrayMultas));
    console.log();
}

let totalArrecadado = 0;
let motoristaComMaisMultas = null;
let numeroMaiorMultas = Number.MIN_SAFE_INTEGER;

console.log("\nRelatorio Motoristas");

motoristas.forEach((motorista) => {
    totalArrecadado += motorista.calcularTotalMultas();

    if(motorista.numero_multas > numeroMaiorMultas) {
        numeroMaiorMultas = motorista.numero_multas;
        motoristaComMaisMultas = motorista;
    }

    return motorista.divida();
});

console.log(`\nTotal arrecadado: R$ ${totalArrecadado.toFixed(2)}`);
console.log(`Carteira Motorista com mais multas: ${motoristaComMaisMultas.numero_carteira_motorista}`)



