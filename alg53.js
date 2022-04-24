/**
 * 
 */

const rd = require('readline-sync')

let alunosAprovados = new Array()
let todosAlunos = new Array()

let quantidadeAlunos = rd.questionInt("Quantos alunos á na classe: ")

for (let i = 0; i < quantidadeAlunos; i++) {
    let nome = rd.question("Nome do aluno: ")
    let nota = rd.questionFloat("Nota do aluno: ")
    
    todosAlunos.push({'nome': nome, 'nota': nota})
    
    console.log()
}

alunosAprovados = todosAlunos.filter(({nome, nota}) => {
    if(nota >= 7.0) {
        return {"nome": nome, "nota": nota}
    }
})




console.log(alunosAprovados)




