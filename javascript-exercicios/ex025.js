const prompt = require("prompt-sync")();
let n = prompt("digite seu nome: ")
console.log(`seu nome tem silva?: ${n.toLowerCase().includes('silva')}`)