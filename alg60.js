const rd = require('readline-sync')

let n = rd.questionInt(": ")

let frase = ""

for (let i = 1; i <= n; i++) {
    if(n === i) frase += "Ho!"
    else frase += "Ho "
    
}

console.log(frase);