/**
 * Entrar com a sigla do estado de uma pessoa e imprimir uma das mensagens:
 * carioca, paulista, mineiro, outros estados
 * Faça o mesmo do algoritimo anterior mais agora buscando no arquivo json na pasta recursos
 */

const fs = require('fs');
const rd = require('readline-sync');

let siglasEstados = null;

fs.readFile('./recursos/sigla-estados.json', (err, data) => {
    if(err) throw err;

    siglasEstados = JSON.parse(data);
})


let sigla = rd.question("Sigla: ");

console.log();

setTimeout(() => {
    console.log(siglasEstados[sigla.toLowerCase()]);
}, 100)
