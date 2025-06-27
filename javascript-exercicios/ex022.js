const prompt = require("prompt-sync")();
let nome = prompt("digite seu nome completo: ")

console.log(`frase em maiúscula ${nome.toUpperCase()}`)
console.log(`Frase em minúsculo ${nome.toLowerCase()}`)
let r = nome.replace(' ','')
console.log(`quantas letras ao todo: ${r.length}`)