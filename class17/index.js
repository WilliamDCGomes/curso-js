let funcao = function saudacao(nome) {
    saudacao.variavelDentro = 3;
    console.log(nome);
    return 10;
};

let value = funcao('teste');

console.log(value);



function test() {
    test.variavelDentro = 3;
}
test();
console.log(test.variavelDentro);

let newTest = (v) => {
    return `Sou foda ${v}`;
}

console.log(newTest('pra carai'));