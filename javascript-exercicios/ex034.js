const prompt = require("prompt-sync")();

// Pergunta o salário
const salario = parseFloat(prompt("Digite o salário do funcionário: "));
let aumento = 0;
let novoSalario = 0;

// Verifica se o salário é superior a 1250
if (salario > 1250) {
    aumento = salario * 0.10;
    novoSalario = salario + aumento;
    console.log(`O salário do funcionário é de R$${salario.toFixed(2)} e com aumento de 10% ficou R$${novoSalario.toFixed(2)}`);
} else {
    aumento = salario * 0.15;
    novoSalario = salario + aumento;
    console.log(`O salário do funcionário é de R$${salario.toFixed(2)} e com aumento de 15% ficou R$${novoSalario.toFixed(2)}`);
}
