const prompt = require("prompt-sync")();

// criando a lista que guarda os valores
let valores = [];

while(true){
    let novos_valores = Number.parseInt(prompt("digite um valor: "));

    if (!valores.includes(novos_valores)){
        valores.push(novos_valores);
        valores.sort();
        console.log("valor adicionado com sucesso... ");
    }else{
        console.log("valor duplicado! não vou adicionar");
    }

    // para verificar se o usuário quer ou não continuar
    let resp = ' ';
    while (resp != 'S' && resp != 'N'){
        resp = prompt("quer continuar[S/N]: ").trim().toUpperCase();
    }
    if (resp == "N"){
        console.log("saindo do programa... ")
        break;
    }
    
}

console.log(valores);