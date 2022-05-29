/**
 * Criar um algoritimo que permita ao aluno responder qual a capital do Brasil. Varias posisibilidades deverao ser pensadas.
 * 
 */

const rd = require('readline-sync')

let resposta = rd.question("Qual a capital do Brasil: ")

console.log()

if(resposta === "Brasília" || resposta === "BRASÍLIA") {
    console.log("Parabens")
} else if (resposta === "brasília" || resposta === "Brazília" || resposta === "brazília") {
    console.log("Certo! Mas atenção para grafia: Brasília ou BRASÍLIA")
} else {
    console.log("ERRADO! ESTUDE MAIS!")
}

