/** 
 * Escreva um algoritimo verificando se uma frase é um palindromo.
 * 
 *
*/
    


const rd = require('readline-sync')

// let frase = rd.question("Digite uma frase ou palavra: ");


function verificaPalindromo(frase) {
    if(!frase) return "string inexistente"
    
    return frase.split("").reverse().join("") === frase


    
}

console.log(verificaPalindromo("arara"))