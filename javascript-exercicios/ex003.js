const prompt = require("prompt-sync")();

let n1 = Number(prompt("digite um valor: "));
let n2 = Number(prompt("digite outro valor: ")); 
let s = n1 + n2;

console.log(`a soma entre ${n1} e ${n2} é ${s}`)