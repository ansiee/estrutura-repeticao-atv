/*
    1. Crie um programa que solicita ao usuário 10 números, através de uma estrutura de repetição, e mostre o maior número digitado pelo usuário
*/

let i = 0
let num = [];
let maiorNum = 0;

for(let i = 1; i < 11; i++){
    num[i-1] = Number(prompt(`Digite o número ${i}°`));

    if (maiorNum < num[i-1]){
        maiorNum = num[i-1]
    }
}



document.getElementById('info').innerHTML = (`O maior número digitado é ${maiorNum}`)
