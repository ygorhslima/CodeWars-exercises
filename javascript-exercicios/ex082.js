const prompt = require("prompt-sync")();
let lista = [];
while(true){
    let n = Number(prompt("digite um número: "));
    lista.push(n);

    let resp = ' ';
    while (resp != 'S' && resp != 'N'){
        resp = prompt("quer continuar[S/N]: ").trim().toUpperCase();
    }
    if (resp == "N"){
        console.log("saindo do programa... ");
        break;
    }
}

let par = [];
let impar = [];

for (const i of lista){
    if (i % 2 == 0){
        par.push(i);
    }else if(i % 2 == 1){
        impar.push(i);
    }
}

console.log(`A lista completa é ${lista}`);
console.log(`A lista dos pares é ${par}`);
console.log(`a lista de ímpares é ${impar}`);