const prompt = require("prompt-sync")(); 
let n = Number(prompt("digite um valor para ver sua Tabuada: "))
for(let c=1; c<11;c++){console.log(`${n} x ${c} = ${n*c}`)}