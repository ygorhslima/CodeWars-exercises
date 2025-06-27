const prompt = require("prompt-sync")();
let lista = [];

for (let c=0 ; c<5 ; c++){
    lista.push(Number(prompt(`digite um valor para a posição ${c}: `)));
}

let maior = Math.max(...lista);
let menor = Math.min(...lista);

console.log("-=".repeat(50));
console.log(`você digitou: ${lista}`);

console.log(`o maior valor digitado foi ${maior} nas posições`);
lista.forEach((valor, indice)=>{
    if(valor == maior){
        console.log(`${indice}`);
    }
});

console.log(`o menor valor digitado foi ${menor} nas posições`);
lista.forEach((valor, indice)=>{
    if(valor == menor){
        console.log(`${indice}`);
    }
});