const prompt = require("prompt-sync")();
let cateto_oposto = Number(prompt("comprimento do cateto oposto: "))
let cateto_adjacente = Number(prompt("comprimento do cateto adjacente: "))
let hipotenusa = Math.hypot(cateto_oposto,cateto_adjacente)
console.log(`o cálculo da hipotenusa foi de ${hipotenusa.toFixed(2)}`)