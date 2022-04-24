function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`
}

const joao = {
    nome: "Joao",
    idade: 15,
}

const pietra = {
    nome: "Pietra",
    idade: 25
}

console.log(calculaIdade.call(joao, 5))
console.log(calculaIdade.call(pietra, 10))

console.log(calculaIdade.apply(pietra, [10]))
console.log(calculaIdade.apply(joao, [5]))