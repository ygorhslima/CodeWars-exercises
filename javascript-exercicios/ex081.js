const prompt = require("prompt-sync")()
let cont = 0
let lista = []

while (true){
    
    let n = Number.parseInt(prompt("Digite um valor: "))
    lista.push(n)
    cont += 1

    let resp = ' ';
    while (resp != 'S' && resp != 'N'){
        resp = prompt("quer continuar[S/N]: ").trim().toUpperCase();
    }
    if (resp == "N"){
        console.log("saindo do programa... ")
        break;
    }
}

lista.sort((a,b)=> b - a);

console.log(`você digitou ${cont} elementos`)
console.log(`os valores em ordem decrescente são ${lista}`)

if (lista.includes(5)){
    console.log("o valor 5 faz parte da lista")
}else{
    console.log("o valor 5 não faz parte da lista")
}