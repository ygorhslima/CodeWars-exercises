const prompt = require("prompt-sync")();

let c = Number.parseFloat(prompt("informe a temperatura em °c: "))
let f = (9*c / 5) + 32
console.log(`a temperatura de ${c}°C corresponde a ${f}°F`)