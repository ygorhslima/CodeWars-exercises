const prompt = require("prompt-sync")()

contagem = [
    "Zero","Um","Dois","Três","Quatro","Cinco","Seis","Sete","Oito",
    "Nove","Dez","Onze","Doze","Treze","Catorze","Quinze","Dezesseis","Dezessete","Dezoito","Dezenove","Vinte"
]
while (true){
    let n = parseInt(prompt("digite um valor entre 0 e 20: "))
    if (n >= 0 && n <= 20){
        console.log(`você digitou o número ${contagem[n]}`)
        resp = prompt("você quer continuar? [S/N]: ").trim().toUpperCase()

        if (resp == 'N'){
            console.log("saindo...")
            break
        }
    }
}