// Paulinho tem em suas mãos um novo problema. Agora a sua professora lhe pediu que construísse um programa para verificar, à partir de dois valores muito grandes A e B, se B corresponde aos últimos dígitos de A.

// A entrada consiste de vários casos de teste. A primeira linha de entrada contém um inteiro N que indica a quantidade de casos de teste. Cada caso de teste consiste de dois valores A e B maiores que zero, cada um deles podendo ter até 1000 dígitos.

const rd = require('readline-sync')

let numeroTestes = rd.questionInt("")

for (let i = 0; i < numeroTestes; i++) {
    let lines = rd.question("").split(" ")
    
    let a = lines[0]
    let b = lines[1]
    
    let result = a.substring(a.length - b.length) === b

    if(result) {
        console.log("encaixa")
    } else {
        console.log("nao encaixa")
    }
}