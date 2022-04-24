/**
 * Substitua todos os numeros pares de um array pelo numero 0;
 * 
 * @param {Array} arr
 */

function subtituiNumerosPares(arr) {
    if(!arr || arr.length == 0) return -1

    return arr.map((value) => {
        if(value % 2 == 0) {
            return 0
        }
        return value
    })
}


console.log(subtituiNumerosPares([1, 3, 4, 6, 80, 33, 21, 90]))
console.log(subtituiNumerosPares([]))

