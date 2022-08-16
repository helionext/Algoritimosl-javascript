/**
 * Criar um algoritimo que imprima todos os números inteiros e positivos no intervalo aberto entre
 * 10 e 100 de modo que:
 * - não termine em zero
 * - se o digito da direita foi removido, o número restante é divisor do número original
 */


for (let i = 10; i < 100; i++) {
    let restanteNumero = Math.trunc(i / 10);
    let resto = i % 10;
    if(resto !== 0 && i % restanteNumero === 0) {
        console.log(i);
    }
}

