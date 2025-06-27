const prompt = require("prompt-sync")();

let somaIdade = 0;
let idade_homem_velho = 0;
let nome_homem_velho = '';
let totMulher20 = 0;

for(let pessoa=0; pessoa < 5; pessoa++){
    console.log(`------------ ${pessoa}°a PESSOA ---------------`);
    let nome = prompt("Nome: ").trim();
    let idade = parseInt(prompt("idade: "));
    let sexo = prompt("Sexo [M/F]: ").trim().toUpperCase()

    somaIdade += idade

    if ((sexo === "M") && (idade > idade_homem_velho)){
        idade_homem_velho = idade;
        nome_homem_velho = nome;
    }
    if((sexo === "F") && (idade < 20)){
        totMulher20 += 1
    }
}

let media = somaIdade / 4;

console.log(`\nA média de idade do grupo é de ${media.toFixed(1)} anos`);
if (nome_homem_velho) {
    console.log(`O homem mais velho é ${nome_homem_velho} e tem ${idade_homem_velho} anos`);
} else {
    console.log(`Não foi informado nenhum homem no grupo`);
}
console.log(`Ao todo são ${totMulher20} mulher(es) com menos de 20 anos`);