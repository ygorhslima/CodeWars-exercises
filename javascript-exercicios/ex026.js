const prompt = require("prompt-sync")();

let frase = prompt("digite uma frase qualquer: ")
frase = frase.toLowerCase(); 

const letra = 'a';
const qtd = frase.split(letra).length - 1; // conta quantas vezes 'a' aparece
const primeira = frase.indexOf(letra);     // primeira ocorrência
const ultima = frase.lastIndexOf(letra);   // última ocorrência

console.log(`Quantas vezes aparece a letra 'a'?: ${qtd}`);
console.log(`Em que posição o primeiro 'a' apareceu?: ${primeira}`);
console.log(`Em que posição o 'a' aparece a última vez?: ${ultima}`);
