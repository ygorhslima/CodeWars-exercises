const prompt = require("prompt-sync")()

let dados = []
while(true){
    let nome = prompt("Nome: ")
    let nota1 = Number(prompt("Nota 1: "))
    let nota2 = Number(prompt("Nota 2: "))
    let media = (nota1 + nota2) / 2
    dados.push([nome, [nota1, nota2], media])
    let resp = ' '
    while(!['S','N'].includes(resp)){
        resp = prompt("quer continuar[S/N]: ").trim().toUpperCase()
    }
    if (resp == "N"){
        console.log("saindo...")
        break
    }
}
console.log("-=".repeat(23));
console.log(`No.  NOME         MÉDIA`);
dados.forEach((aluno, idx) => {
    console.log(`${idx.toString().padEnd(4)} ${aluno[0].padEnd(12)} ${aluno[2].toFixed(2)}`);
});
console.log("-=".repeat(23));
