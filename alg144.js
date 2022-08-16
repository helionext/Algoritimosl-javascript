/**
 * Entar com nome, nota da PR1 e nota da PR2 de 15 alunso. Imprimir uma listagem
 * contendo: nome, nota da PR1, nota da PR2 e média arredondada de cada aluno. Ao final,
 * calcule a média geral da turma.
 */

const rd = require('readline-sync');

let alunos = [];

for (let i = 0; i < 5; i++) {
    let nome = rd.question("Nome: ");
    let nota1 = rd.questionFloat("Nota PR1: ");
    let nota2 = rd.questionFloat("Nota PR2: ");
    console.log();
    let media = (nota1 + nota2) / 2;

    alunos.push({nome: nome, pr1: nota1, pr2: nota2, media: media});
}

console.log("\nRelatorio...");
alunos.forEach((aluno) => {
    console.log(`Nome: ${aluno.nome}`);
    console.log(`PR1: ${aluno.pr1}`);
    console.log(`PR2: ${aluno.pr2}`);
    console.log(`Media: ${aluno.media}`);
    console.log();
})