const prompt = require("prompt-sync")();

// Pergunta o valor da casa
let valorCasa = prompt("Qual o valor da casa? R$ ").replace("R$", "").replace(".", "").replace(",", ".").trim();
valorCasa = parseFloat(valorCasa);

// Pergunta o salário do comprador
let salarioComprador = prompt("Qual o seu salário? R$ ").replace("R$", "").replace(".", "").replace(",", ".").trim();
salarioComprador = parseFloat(salarioComprador);

// Pergunta em quantos anos será pago
let anosPagamento = parseInt(prompt("Quantos anos você vai pagar a casa? "));

// Calcula o valor da prestação mensal
let prestacaoMensal = valorCasa / (anosPagamento * 12);

// Calcula 30% do salário
let limitePrestacao = salarioComprador * 0.3;

// Verifica se o empréstimo será aprovado
if (prestacaoMensal <= limitePrestacao) {
    console.log(`✅ Empréstimo aprovado! Prestação mensal: R$ ${prestacaoMensal.toFixed(2)}`);
} else {
    console.log(`❌ Empréstimo negado! Prestação de R$ ${prestacaoMensal.toFixed(2)} excede 30% do salário (R$ ${limitePrestacao.toFixed(2)})`);
}
