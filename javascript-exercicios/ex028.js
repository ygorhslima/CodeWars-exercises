const prompt = require("prompt-sync")();

const computador = Math.floor(Math.random() * 6);

console.log("JOGO DA ADIVINHAÇÃO");

console.log(`olá jogador vou pensar em um número entre 0 e 5, tente adivinhar`);

let jogador = Number(prompt(`qual número eu pensei: `));

if (jogador == computador){
    console.log(`computador: ${computador}`);
    console.log(`jogador: ${jogador}`);
    console.log("você pensou o mesmo número que eu! parabéns");
}else{
    console.log(`computador: ${computador}`);
    console.log(`jogador: ${jogador}`);
    console.log("que pena! você errou, tente na próxima!");
}
