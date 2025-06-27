const prompt = require("prompt-sync")();

let matriz = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

for (let linha = 0; linha < 3; linha++){
    for(let coluna = 0; coluna < 3; coluna++){
        matriz[linha][coluna] = Number(prompt(`Digite um valor para [${linha}, ${coluna}]: `));
    }
}

for (const linha of matriz){
    let lF = ""
    for (const valor of linha){
        lF += `[ ${valor} ]`
    }
    console.log(lF.trim())
}