const prompt = require("prompt-sync")();

let maiorpeso = 0
let menorpeso = 0

for (let p=1; p<6; p++){
    let peso = Number(prompt(`Peso da ${p}°a pessoa: `));
    if (p == 1){
        maiorpeso = peso;
        menorpeso = peso;
    }else{
        if(peso > maiorpeso){
            maiorpeso = peso;
        }
        if(peso < menorpeso){
            menorpeso = peso
        }
    }
}

console.log(`O maior peso lido foi de ${maiorpeso}Kg`);
console.log(`O menor peso lido foi de ${menorpeso}Kg`);
