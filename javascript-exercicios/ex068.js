const prompt = require("prompt-sync")()

console.log("=============================================")
console.log("         VAMOS JOGAR PAR OU ÍMPAR            ")
console.log("=============================================")

let vitorias = 0

while (true) {
    let jogador = parseInt(prompt("diga um valor: "))
    let computador = Math.floor(Math.random() * 11)
    let total = jogador + computador

    let tipo = prompt("Par Ou Ímpar? [P/I]: ").trim().toUpperCase()

    console.log(`você jogou ${jogador} e o computador ${computador} total de ${total}`)

    console.log("DEU PAR " ? total % 2 == 0 : "DEU ÍMPAR")

    if (tipo == "P"){
        if (total % 2 == 0){
            console.log("você venceu")
            vitorias += 1
        }else{
            console.log("você perdeu")
            break
        }
    }
    else if(tipo == "I"){
        if(total % 2 == 1){
            console.log("você venceu")
            vitorias += 1
        }else{
            console.log("você perdeu")
            break
        }
    }
    console.log("vamos jogar novamente...")
}
console.log(`GAME OVER! você venceu ${vitorias} vezes`)