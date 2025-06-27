const prompt = require("prompt-sync")();

let num = [[],[]];

for (let c=0; c<7; c++){
    let valor = Number(prompt(`Digite o ${c+1}° valor: `));
    if(valor % 2 == 0){
        num[0].push(valor);
        num[0].sort();
    }else if(valor % 2 == 1){
        num[1].push(valor);
        num[1].sort();
    }
}

console.log(`os valores pares digitados foi ${num[0]}`);
console.log(`os valores impares digitados foi ${num[1]}`);
