/*
# Melhore o jogo do desafio 028 onde o computador vai "pensar" em um número entre 0 e 10
# só que agora o jogador vai tentar adivinhar até acertar, mostrando no final quantos palpites foram necesários para vencer
*/

const prompt = require("prompt-sync")();
let computador = Math.floor(Math.random()*41);

console.log("sou seu computador... pensei em umm número entre 0 e 40");
console.log("será que você consegue adivinhar qual foi?");

let acertou = false;
let palpites = 0;

while (!acertou){
    let jogador = Number(prompt("qual é seu palpite?: "));
    palpites += 1;
    if (jogador == computador){
        acertou = true
    }else{
        if(jogador < computador){
            console.log("mais... tente mais uma vez")
        }else if (jogador > computador){
            console.log("menos... tente mais uma vez")
        }
    }
}

console.log(`acertou com ${palpites} tentativas.`)