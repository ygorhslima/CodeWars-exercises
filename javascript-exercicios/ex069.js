const prompt = require("prompt-sync")()

let totPessoasMaioridade = 0
let totHomens = 0
let totMulher20 = 0 

while (true){
    console.log("------------------------------------")
    console.log("       CADASTRE UMA PESSOA          ")
    console.log("------------------------------------")

    let idade = parseInt(prompt("idade: "))
    let sexo = prompt("sexo [M/F]: ").trim().toUpperCase()

    if((idade > 18) && (sexo == "M" || sexo == "F")){
        totPessoasMaioridade += 1
    }
    
    if((idade > 18) && (sexo == "F")){
        totMulher20 += 1
    }

    if (sexo == "M"){
        totHomens += 1
    }

    let resp = '';
    while (resp !== "S" && resp !== "N") {
        resp = prompt("Quer continuar [S/N]: ").trim().toUpperCase();
        if (resp !== "S" && resp !== "N") {
            console.log("Resposta inválida! Digite S ou N.");
        }
    }

    if (resp == "N"){
        console.log("saindo do programa...")
        break
    }
}   


console.log("------------------------------------");
console.log("          FIM DO CADASTRO           ");
console.log("------------------------------------");
console.log(`Total de pessoas maiores de 18 anos: ${totPessoasMaioridade}`);
console.log(`Total de homens cadastrados: ${totHomens}`);
console.log(`Total de mulheres com mais de 18 anos: ${totMulher20}`);