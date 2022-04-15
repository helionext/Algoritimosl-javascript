const rd = require('readline-sync')

function comparaNumeros(a, b) {
    let iguaisOuNao = ""
    let soma = a + b
    let maiorEMenor = [];

    if(a === b) {
        iguaisOuNao = "são iguais"
    } else {
        iguaisOuNao = "não são iguais"
    }

    if(soma > 10 && soma < 20) {
        maiorEMenor[0] = "maior"
        maiorEMenor[1] = "menor"
    } else if (soma > 10 && soma > 20) {
        maiorEMenor[0] = "maior"
        maiorEMenor[1] = "maior"
    } else {
        maiorEMenor[0] = "menor"
        maiorEMenor[1] = "menor"
    } 

    return `Os números ${a} e ${b} ${iguaisOuNao}.Sua soma é ${soma} que é ${maiorEMenor[0]} que 10 e ${maiorEMenor[1]} que 20.` 
}


let num1 = rd.questionFloat("Numero 1: ")
let num2 = rd.questionFloat("Numero 2: ")

const RESULT = comparaNumeros(num1, num2)

console.log("\n" + RESULT)