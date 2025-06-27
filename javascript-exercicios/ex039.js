const prompt = require("prompt-sync")()

let ano_nascimento = Number(prompt("qual é seu ano de nascimento?: "))
let ano_atual = new Date().getFullYear()
idade = ano_atual - ano_nascimento

if (idade == 18){
    console.log(`você tem ${idade} anos e está na idade certa para se alistar, vá a uma junta militar mais próxima!`)
}else if (idade < 18){
    console.log(`você tem ${idade} anos e você ainda não pode se alistar`)
}else{
    console.log(`você tem ${idade} anos e já passou o seu processo de alistamento`)
}
