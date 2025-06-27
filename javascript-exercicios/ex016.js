const prompt = require("prompt-sync")();

let n = Number(prompt("digite um valor: "))
let parte_inteira = Math.floor(n)
console.log(`o número ${n} tem a parte inteira ${parte_inteira}`)