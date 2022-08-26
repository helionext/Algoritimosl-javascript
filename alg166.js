/**
 * Uma empresa de fornecimento de energia elétrica faz a leitura mensal dos medidores de consumo.
 * Para cada consumidor, são digitados os seguintes dados:
 * 
 * - Número do consumidor
 * - quantidade de KW/h consumidos durante o mês
 * - tipo (código) do consumidor
 * 
 * 1 - residencial, preço em reais por kWh = 0.3
 * 2 - comercial, preço em reais por kWh = 0.5
 * 3 - industrial, preço em reais por kWh = 0.7
 * 
 * Os dados devem ser lidos até que seja encontrado um consumidor com número 0 (zero). Calcular
 * e imprimir:
 * - o custo total para cada consumidor
 * - o total de consumo para os três tipos de consumidor
 * - a média de consumo dos tipos 1 e 2
 */

const rd = require('readline-sync');
const enel = require('./alg166-funcoes');


let codigoConsumidor = 0;
let consumidores = [];
let consumidorResidencial = 0.0;
let consumidorComercial = 0.0;
let consumidorIndustrial = 0.0;

module.exports = {
    consumidorComercial,
    consumidorIndustrial,
    consumidorResidencial
}

do {
    codigoConsumidor = rd.questionInt("Codigo consumidor: ");
    

    if(codigoConsumidor !== 0) {
        let quantidadeKw = rd.questionFloat("Consumo kW/h: ");

        console.log(`\n[1] Residencial`);
        console.log(`[2] Comercial`);
        console.log(`[3] Industrial`);
        let tipoConsumidor = parseInt(rd.question("Tipo de  consumidor: ", {limit: ['1', '2', '3']}));
        consumidores.push({codigoConsumidor, quantidadeKw, tipoConsumidor});

    } else {
        break;
    }

    console.log();
} while(codigoConsumidor !== 0);

enel.calcularCustoConsumidor(consumidores);
[consumidorResidencial, consumidorComercial, consumidorIndustrial] = [...enel.calcularCustoTipoConsumidor(consumidores)];

let mediaConsumidoresUmEDois = enel.calcularMediaConsumidoresUmEDois(consumidores);

let totalConsumidores = consumidorComercial + consumidorIndustrial + consumidorResidencial;

console.log(`\nO custo total de cada consumidor: `);
consumidores.forEach((consumidor) => {
    console.log(`Codigo consumidor: ${consumidor.codigoConsumidor}`);
    console.log(`Custo total: ${consumidor.totalKWH.toFixed(2)}`);
    console.log();
});

console.log(`\nTotal custo consumidores: ${totalConsumidores.toFixed(2)}`);
console.log(`Media consumidores 1 e 2: ${mediaConsumidoresUmEDois.toFixed(2)}`);