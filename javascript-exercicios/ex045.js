const prompt = require("prompt-sync")()

let opcoes = {
    0: "Pedra",
    1: "Papel",
    2: "Tesoura"
} 
let regras ={
    "Pedra":"Tesoura",
    "Papel":"Pedra",
    "Tesoura":"Papel"
}

console.log("suas opções: ")
for (const chave in opcoes){
    console.log(`[ ${chave} ] ${opcoes[chave]}`)
}

const jogador = Number(prompt("qual a sua jogada: "))
const computador = Math.floor(Math.random() * 3);

console.log(`Jogador jogou: ${opcoes[jogador]}`);
  console.log(`Computador jogou: ${opcoes[computador]}`);

if (opcoes[jogador] === opcoes[computador]) {
    console.log("Deu empate");
} else if (regras[opcoes[jogador]] === opcoes[computador]) {
    console.log("Jogador venceu");
} else {
    console.log("Computador venceu");
}