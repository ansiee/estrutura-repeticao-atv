/*
     2. Crie um programa que imprima todos os divisores de um número.
        Para um dado número n, o programa testa todos os números de 1 até n.

 */

let numero = prompt("Digite um número:");
let info = document.getElementById("info");
for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    info.innerHTML += `<br>${i} é divisor`;
  }
}
