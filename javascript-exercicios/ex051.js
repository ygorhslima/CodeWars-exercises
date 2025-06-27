const prompt = require("prompt-sync")()
let a1 = Number(prompt("primeiro termo: "))
let r = Number(prompt("Razão: "))
let decimo = a1 + (10 - 1) * r

for (let c=a1; c<decimo; c++){
    console.log(`${c}`)
}