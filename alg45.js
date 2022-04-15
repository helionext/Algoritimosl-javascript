const rd = require('readline-sync')

let valorProduto = rd.questionFloat("Preço do produto: ")

const DESCONTO = 0.91
let precoComDesconto = valorProduto * DESCONTO

console.log(`\nPreço do produto com desconto de 9%: R$ ${precoComDesconto}`);
