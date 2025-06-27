const prompt = require("prompt-sync")();

let lista = [];
let pessoa = [];

while(true)
{
    let nome = prompt("Nome: ");
    let peso = Number.parseFloat(prompt("Peso: "));

    lista.push([nome,peso]);

    let resp = ' ';
    while (!['S','N'].includes(resp)){
        resp = prompt("Quer continuar [S/N]: ").trim().toUpperCase();
    }

    if(resp == 'N'){
        break;
    }
}

let tot_peso_maior = lista[0][1]
let tot_peso_menor = lista[0][1]

for (const pesos of lista){
    if (pesos[1] > tot_peso_maior){
        tot_peso_maior = pesos[1];
    }
    if (pesos[1] < tot_peso_menor){
        tot_peso_menor = pesos[1];
    }
}

console.log("-=".repeat(50));
console.log("Resumo do cadastro");
console.log("-=".repeat(50));

for (const p of lista){
    console.log(`nome: ${p[0]}`);
    console.log(`peso: ${p[1]}kg`);
}

// quantas pessoas foram cadastrados
console.log(`ao todo foram ${lista.length} pessoas cadastradas`);
// uma listagem com as pessoas mais pesadas

let n_peso_maior = lista.filter((p)=>{
    if(p[1] == tot_peso_maior){
        return `[${p[0]}]`;
    }
})

let n_peso_menor = lista.filter((p)=>{
    if(p[1] == tot_peso_menor){
        return `[${p[0]}]`;
    }
})

console.log(`o maior peso foi de ${tot_peso_maior}Kg. Peso de ${n_peso_maior}`)
console.log(`o menor peso foi de ${tot_peso_menor}Kg. Peso de ${n_peso_menor}`)