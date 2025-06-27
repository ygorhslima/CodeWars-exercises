const prompt = require("prompt-sync")();


// desenvolva um programa que pergunte a distância de uma viagem em km.
let distancia = Number(prompt("quantos kilômetros serão percorridos: "))
let preco=0;

//calcule o preço da passagem, cobrando R$0,50 por km para viagens de até 200km 
// e R$0,45 para viagens mais longas

if (distancia <= 200){
    preco = distancia * 0.50
    console.log(`o preço que será pago cobrando 50 centavos por kilômetro rodado será de R$${preco}`) 
}else{
    preco = distancia * 0.45
    console.log(`o preço que será pago cobrando 45 centavos por kilômetro rodado será de R$${preco}`)
}