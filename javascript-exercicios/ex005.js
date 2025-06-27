const prompt = require("prompt-sync")();

let n = Number(prompt("digite um valor: "));
console.log(`o seu sucessor é ${n+1} e seu antecessor é ${n-1}`);