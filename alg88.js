/**
 * A prefeitura do Rio de Janeiro abriu uma linha de crédito para os funcionarios estatuarios. O valor
 * máximo da prestação não poderá ultrapassar 30% do salário bruto. Fazer um algoritimo que permita
 * entrar com o salário bruto e o valor da prestação e informar-se se o emprestimo pode ou não ser
 * concedido.
 */

const rd = require('readline-sync')

let salarioBruto = rd.questionFloat("Salario bruto: ")
let prestacao = rd.questionFloat("Prestação: ")

const AVALIACAO = (salarioBruto * 0.30) > prestacao

console.log()

if(AVALIACAO) {
    console.log("Emprestimo concedido!")
} else {
    console.log("Emprestimo negado")
}