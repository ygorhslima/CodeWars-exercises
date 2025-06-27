const prompt = require("prompt-sync")()

let c = 0
while (true){
    let n = Number(prompt("quer ver a tabuada de qual valor: "))
    if(n < 0){
        console.log("programa tabuada encerrado. volte sempre!")
        break
    }
    c+=1

    console.log("-------------------------------------")
    for (let c=0; c < 11; c++){
        console.log(`${n} x ${c} = ${n*c}`)
    }
    console.log("-------------------------------------")

}