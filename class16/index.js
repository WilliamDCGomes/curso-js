const alunos = ['Luiz', 'Maria', 'João'];

alunos.push('Teste');
alunos.unshift('Teste começo');

console.log(alunos[0][1]);
console.log(alunos);



const alunoRemovido = alunos.pop();
const alunoRemovido2 = alunos.shift();
console.log(alunoRemovido);
console.log(alunoRemovido2);


console.log(alunos.slice(-2));

