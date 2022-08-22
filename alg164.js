/**
 * Dados um pais A, com 5.000.000 de habitantes e uma taxa de natalidade de 3% ao ano, e um
 * pais B, com 7.000.000 de habitantes e uma taxa de natalidade de 2% ao ano, calcular e
 * imprimir o tempo necessário para que a populaçã do pais A ultrapasse a população do
 * pais B.
 */

let paisA = 5000000;
let paisB = 7000000;

let contAno = 0;
while(paisA < paisB) {
    paisA *= 1.03;
    paisB *= 1.02;
    contAno++;
}

console.log(`São necessarios ${contAno} anos para o pais A passa o pais B em população`);