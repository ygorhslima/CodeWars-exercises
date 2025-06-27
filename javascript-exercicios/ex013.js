const prompt = require("prompt-sync")();

let salario = Number(prompt("qual é o salário do funcionário: R$"))
let novo = salario + (salario * 15/100)

console.log(`um funcionário que ganhava R$${salario.toFixed(2)} com 15% de aumento, passa a receber R$${novo.toFixed(2)}`)