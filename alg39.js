const rd = require('readline-sync')

let diagMaior, diagMenor, area;

diagMaior = rd.questionFloat("Diagonal maior: ")
diagMenor = rd.questionFloat("Diagonal menor: ")

area = (diagMaior * diagMenor) / 2;

console.log(`\nArea: ${area}`)