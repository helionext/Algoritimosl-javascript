/**
 * Uma pesquisa de opniao realizada no Rio de Janeiro teve as seguintes perguntas:
 * - Qual seu time de coração?
 * 1 - Fluminense
 * 2 - Botafogo
 * 3 - Vasco
 * 4 - Flamengo
 * 5 - Outros
 * 
 * Onde voçe mora?
 * 1 - RJ
 * 2 - Niterói
 * 3 - Outros
 * 
 * Qual seu salário?
 * 
 * Criar um algoritimo que imprima
 * - O número de torcedores por clube
 * - a média salarial dos torcedores do Botafogo
 * - o número de pessoas moradoras do Rio de Janeiro, torcedores de outros clubes
 * 
 * - O número de pessoas de Niterói torcedoras do Fluminense
 */

const rd = require('readline-sync');


const localidades = {
    1: 'RJ',
    2: 'Niteroi',
    3: 'Outros'
}
const objetoTimes = {
    1: 'Fluminense',
    2: 'Botafogo',
    3: 'Flamengo',
    4: 'Vasco',
    5: 'Outros'
}

class Torcedor {
    constructor(time, localidade, salario=0.0) {
        this.time = time;
        this.localidade = localidade;
        this.salario = salario;
    }
}

const torcedores = [];
let desejaCadastrar = null; 

while(desejaCadastrar !== 'N') {
    
    
    
    console.log("[1] Fluminense");
    console.log("[2] Botafogo");
    console.log("[3] Flamengo");
    console.log("[4] Vasco");
    console.log("[5] Outros");
    let opcao_time = rd.question("Qual seu time do coração: ", {limit: ['1', '2', '3', '4', '5']});
    
    console.log();
    
    console.log("[1] RJ");
    console.log("[2] Niterói");
    console.log("[3] Outros");
    let opcao_localidade = rd.question("Onde voçe mora: ", {limit: ['1', '2', '3']});
    
    console.log();
    
    let salario = rd.questionFloat("Qual é o seu salario: ");

    torcedores.push(new Torcedor(objetoTimes[opcao_time], localidades[opcao_localidade], salario))

    desejaCadastrar = rd.question("Deseja cadastrar mais um torcedor(S/N): ").toUpperCase();
}

const estatisticasTocedoresDeTimes = {
    'Fluminense': 0,
    'Botafogo': 0,
    'Flamengo': 0,
    'Vasco': 0,
    'Outros': 0,
}

let totalSalarioBotafoguenses = 0;
let moraRioTorceOutros = 0;
let moraNiteroiTorceFluminense = 0;

torcedores.forEach((torcedor) => {
    estatisticasTocedoresDeTimes[torcedor.time] += 1;

    if(torcedor.time === 'Botafogo') {
        totalSalarioBotafoguenses += torcedor.salario;
    }

    if(torcedor.localidade === 'RJ' && torcedor.time === "Outros") {
        moraRioTorceOutros += 1;
    }

    if(torcedor.localidade === 'Niteroi') {
        moraNiteroiTorceFluminense += 1;
    }
})

let mediaSalarioBotafoguense = totalSalarioBotafoguenses / estatisticasTocedoresDeTimes.Botafogo;

console.log(`\nNumero de torecdores por clube: `);

for(let prop in estatisticasTocedoresDeTimes) {
    console.log(prop + ": " + estatisticasTocedoresDeTimes[prop]);
}

console.log(`Média salarial torcedores botafogo: ${mediaSalarioBotafoguense}`);
console.log(`Numero de pessoas que moram no RJ e torçem para outros times: ${moraRioTorceOutros}`);
console.log(`Numero de pessoas que moram em Niterói torcedoras do Fluminense: ${moraNiteroiTorceFluminense}`);

