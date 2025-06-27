/**
 * # crie um programa que leia dois valores e mostre um enu na tela
# [1] somar
# [2] multiplicar
# [3] maior
# [4] novos números
# [5] sair do programa

# seu programa deverá realizar a operação solicitada em casa caso

 */

const prompt = require("prompt-sync")();

let n1 = Number(prompt("digite um valor: "));
let n2 = Number(prompt("digite outro valor: "));
let opcao = 0;
while (opcao != 5){
    console.log(`
        [1] Somar
        [2] Multiplicar
        [3] Maior
        [4] Novos números
        [5] Sair do programa   
    `);
    opcao = Number(prompt(">>>>>>>> opção: "));

    if (opcao == 1){
        let soma = n1 + n2;
        console.log(`Resultado: ${n1} + ${n2} = ${soma}`);
    }
    else if (opcao == 2){
        let multi = n1 * n2;
        console.log(`Resultado: ${n1} x ${n2} = ${multi}`);
    }
    else if (opcao == 3){
        if (n1 > n2){
            var maior = n1;
        }else{
            var maior = n2;
        }
        console.log(`entre ${n1} e ${n2} o maior valor é ${maior}`);
    }
    else if (opcao == 4){
        n1 = Number(prompt("Digite um novo valor: "));
        n2 = Number(prompt("Digite um outro novo valor: "));
    }
    else if (opcao == 5){
        console.log("saindo do programa");
        break
    }
    else{
        console.log("opção inválida! tente novamente");
    }
} 
console.log("fim do programa");