/*let nome = 'William Douglas'
console.log(`Hello world ${nome}`)


let secondName = 'William Douglas'

console.log(`Meu nome é ${secondName}. Estou aprendendo JavaScript às 16:00 da tarde.`)



let varA = 'A';
let varAa = 'a';
let varB = 'B';
let varC = 'C';

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);

let test = "sddosdoisd";
console.log(test.lastIndexOf('d'));

console.log(varAa.toUpperCase())
console.log(varA.toLowerCase())

for(let t = 1; t < 10; t++){
    console.log(`Teste ${t}`);

    switch(t){
        case 1:
            console.log('dfd');
            break;
        case 2:
            console.log('dsss');
            break;
        default:
            console.log('default');
            break;
    }
}
*/

var isSubsequence = function(s, t) {
    let currentIndex = 0;
    for(let letter of s) {
        if(!t.includes(letter)) {
            return false;
        }
        currentIndex = t.indexOf(letter);
        t = t.substring(currentIndex + 1);
    }
    return true;
};

console.log(`Result: ${isSubsequence("abc", "ahbgdc")}`);