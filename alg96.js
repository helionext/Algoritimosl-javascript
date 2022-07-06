/**
 * Entrar com a sigla do estado de uma pessoa e imprimir uma das mensagens:
 * carioca, paulista, mineiro, outros estados
 */

const rd = require('readline-sync');

let sigla = rd.question("Entre com a sigla do seu estado: ");

let adjetivoGentilico = null;
siglasEstados = {"sp": "Paulista", "ac": "Acriano", "al": "Alagoano", "ap": "Amapaense", "am": "Amazonense", "ba": "Baiano", "ce": "Cearense", "df": "Brasiliense", "es": "Capixaba", "go": "Goiano", "ma": "Maranhense", "mt": "mato-grossense", "ms": "sul-mato-grossense", "mg": "Mineiro", "pa": "Paraense", "pb": "Paraibano", "pr": "Paranaense", "pe": "Pernambucano", "pi": "Piauiense", "rj": "Fluminense", "rn": "Potiguar", "rs": "Gaúcho", "ro": "Rondoniano", "rr": "Roraimense", "sc": "Catarinense", "sp": "Paulista", "se": "Sergipano", "to": "Tocantinense"}

// if(sigla === "rj" || sigla === "RJ") {
//     adjetivoGentilico = "Carioca";
// } else if(sigla === "SP" || sigla === "sp") {
//     adjetivoGentilico = "Paulista";
// } else if(sigla === "MG" || sigal === "mg") {
//     adjetivoGentilico = "Mineiro"
// } else {
//     adjetivoGentilico = "Outros"
// }
// console.log(`\n${adjetivoGentilico}`)

console.log(`\n${siglasEstados[sigla.toLowerCase()]}`);
