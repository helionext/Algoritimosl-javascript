/**
 * Criar um algoritimo que possa ler um conjunto de pedidos de compra e calcule o valor total da
 * compra. Cada pedido é composto pelos seguintes campos:
 * - número de pedido
 * - data do pedido (dia, mês, ano)
 * - preço unitário
 * - quantidade
 */

const rd = require('readline-sync');

const validaData = /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/gi;

let numero_pedido = 0;

class Pedido {
    constructor(numero_pedido, data_pedido, preco_unitario, quantidade) {
        this.numero_pedido = numero_pedido;
        this.data_pedido = data_pedido;
        this.preco_unitario = preco_unitario;
        this.quantidade = quantidade;
    }
}

const listaPedidos = [];

do {
    numero_pedido = rd.questionInt("Numero pedido: ");

    if(numero_pedido === 0) 
        break
        
    let data_pedido = new Date(rd.question("Data pedido: ",{limit: validaData, limitMessage: "Entre com data válida."}));

    let preco_unitario = rd.questionFloat("Preço Unitário: ");
    let quantidade = rd.questionInt("Quantidade: ");

    listaPedidos.push(new Pedido(numero_pedido, data_pedido, preco_unitario, quantidade));

    console.log();
} while(numero_pedido !== 0);

let valorTotal = 0;

listaPedidos.forEach((pedido) => {
    valorTotal += pedido.preco_unitario * pedido.quantidade;
});

console.log(`\nValor total compra: R$ ${valorTotal.toFixed(2)}`);
