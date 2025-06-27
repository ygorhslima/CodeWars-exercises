const prompt = require("prompt-sync")();
let km = Number.parseFloat(prompt("quantos km percorridos?: "))
let dias = Number.parseInt(prompt("quantos dias o carro foi alugado: "))

let pago = (dias * 60) + (km * 0.15)
console.log(`o total a pagar é de ${pago.toFixed(2)}`)