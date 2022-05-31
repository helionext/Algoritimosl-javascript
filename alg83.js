// Um isograma é uma palavra que não tem letras repetidas, consecutivas ou não consecutivas. Implemente uma função que determina se uma string que contém apenas letras é um isograma. Suponha que a string vazia seja um isograma. Ignorar maiúsculas e minúsculas.

const rd = require('readline-sync')

let palavra = rd.question("")

function isIsogram(palavra) {
    palavra = palavra.toLowerCase()
    let letras = new Object()

    for (let i = 0; i < palavra.length; i++) {
        if(!letras.hasOwnProperty(palavra[i])) {
            letras[palavra[i]] = 1
        } else {
            letras[palavra[i]] += 1
        }
    }

    let result = [...Object.values(letras)]

    if(!palavra || palavra.length === 0 || /^\s*$/.test(palavra)) {
        return true
    }

    return !result.some(x => x > 1)
}

console.log(isIsogram(palavra))