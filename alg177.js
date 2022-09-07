/**
 * Uma fabrica produz e vende vários produtos e para cada um deles tem-se o nome, quantidade
 * produzida e quantidade vendida. Criar um algoritimo que imprima:
 * 
 * - Para cada produto, nome, quantidade no estoque e uma mensagem se o produto tiver menos de 50
 * itens no estoque.
 * 
 * - Nome e quantidade do produto com maior estoque.
 */

const rd = require('readline-sync');

class Produto {
    constructor(nome, quantidade) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.estoqueBaixo = false;
        this.analisarEstoque();
    }

    descricao() {
        return `Nome: ${this.nome} Quantidade: ${this.quantidade} ${this.mensagemEstoqueBaixo()}`
    }

    analisarEstoque() {
        if(this.quantidade < 50) {
            this.estoqueBaixo = true;
        } else {
            this.estoqueBaixo = false;
        }
    }

    mensagemEstoqueBaixo() {
        if(this.estoqueBaixo) {
            return "Atenção! Produto com estoque abaixo de 50";
        } else {
            return "";
        }
    }
}

let produtos = [];
let opcao = null;

while(opcao !== 'N') {
    let nome_produto = rd.question("Nome: ");
    let quantidade_produto = rd.questionInt("Quantidade: ");


    produtos.push(new Produto(nome_produto, quantidade_produto));
    opcao = rd.question("Deseja cadastrar mais um produto (S/N): ").toUpperCase();

    console.log();
}

let produtoComMaiorEstoque = null;

produtos.forEach((produto) => {
    let minEstoque = 0;

    if(produto.quantidade > minEstoque) {
        produtoComMaiorEstoque = produto;
        minEstoque = produto.quantidade;
    }
});


produtos.forEach((produto) => {
    console.log(produto.descricao());
})

console.log(`\nProduto com maior estoque: ${produtoComMaiorEstoque.descricao()}`);
