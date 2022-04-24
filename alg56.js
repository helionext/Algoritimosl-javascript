let numeros = [1, 2, 3, 7, 19, 22, 33, 14, 25, 28]
const tabuada = { 
    "1": 1, 
    "2": 2, 
    "3": 3
}

const maca = {
    value: 2
}

const laranja = {
    value: 3
}

const nums = [1, 2]

function mapComThis(arr, thisArg) {
    return arr.map(function(item) {
        return item * this.value;
    }, thisArg)
}

console.log('this ---> maça', mapComThis(nums, maca));

console.log('this ---> laranja', mapComThis(nums, laranja));

let numerosMultiplicadosPor2 = numeros.map((num) =>  num * 2)

Object.keys(tabuada).map(function(key, index)  {
    tabuada[key] *= 2
})

console.log(numeros)
console.log(tabuada)

const NUMEROS_PARES = numeros.filter((num) => num % 2 == 0)

console.log(NUMEROS_PARES)

let somaDosPares = NUMEROS_PARES.reduce((acc, num) => acc + num, 0)
console.log(somaDosPares)


let listaPrecos = [22.45, 22.50, 32.50, 12, 17, 18.99]

const saldoDisponivel = 500;

let saldoFinal = listaPrecos.reduce((acc, preco) => acc - preco, saldoDisponivel)
console.log(saldoFinal)