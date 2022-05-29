/**
 * Pesos do planeta na estrutura switch
 */

const rd = require('readline-sync')

const PLANETAS = ["Mercurio", "Venus", "Marte", "Jupiter", "Saturno", "Urano"]

console.log("1 - Mercurio")
console.log("2 - Venus")
console.log("3 - Marte")
console.log("4 - Jupiter")
console.log("5 - Saturno")
console.log("6 - Urano")

let numeroPlaneta = rd.questionInt("Escolha o planeta a ser analisado: ")
let pesoTerra = rd.questionFloat("Entre com peso na terra: ")

let pesoOutroPlaneta = null

switch (numeroPlaneta) {
    case 1: pesoOutroPlaneta = (pesoTerra / 10) * 0.37; break
    case 2: pesoOutroPlaneta = (pesoTerra / 10) * 0.88; break
    case 3: pesoOutroPlaneta = (pesoTerra / 10) * 0.38; break
    case 4: pesoOutroPlaneta = (pesoTerra / 10) * 2.64; break
    case 5: pesoOutroPlaneta = (pesoTerra / 10) * 1.15; break
    case 6: pesoOutroPlaneta = (pesoTerra / 10) * 1.17; break
    default: pesoOutroPlaneta = null
}

if(pesoOutroPlaneta !== null) {
    console.log("\nSeu peso no planeta terra é: " + pesoOutroPlaneta.toFixed(3))
} else {
    console.log("\nEste planeta não existe")
}
