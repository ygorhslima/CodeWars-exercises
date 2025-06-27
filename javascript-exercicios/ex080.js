const prompt = require("prompt-sync")();

let lista = [];

for(let c=0;c<5;c++){
    let n = Number(prompt(`digite o ${c}°valor: `));

    if (c == 0 || n > lista[lista.length - 1]){
        lista.push(n)
        console.log("adicionado ao final da lista")
    }else{
        let pos = 0
        while (pos < lista.length){
            if (n <= lista[pos]){
                lista.splice(pos, 0, n)
                break
            }
            pos += 1
        }
    }
}

console.log(`os valores digitados em ordem foram ${lista}`)