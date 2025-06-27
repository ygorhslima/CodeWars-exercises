const prompt = require("prompt-sync")();

let ano_atual = new Date().getFullYear();
let totmaior = 0;
let totmenor = 0;

for(let pess=1; pess < 8; pess++){
    let ano_nascimento = Number(prompt(`Em que ano a ${pess}°a pessoa nasceu?: `));
    let idade = ano_atual - ano_nascimento;
    if (idade >= 21){
        totmaior += 1;
    }else{
        totmenor += 1;
    }
}

console.log(`${totmaior} pessoas atingiram a maioridade`);
console.log(`${totmenor} pessoas ainda não atingiram a maioridade`);