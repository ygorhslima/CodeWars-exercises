/*
 Verifique se uma string possui a mesma quantidade de 'x' e 'o'. O método deve retornar um booleano e não diferenciar maiúsculas de minúsculas. A string pode conter qualquer caractere.

 Exemplos de entrada/saída:

 XO("ooxx") => true
 XO("xooxx") => false
 XO("ooxXm") => true
 XO("zpzpzpp") => true // quando não houver 'x' e 'o' presentes, deve retornar true
 XO("zzoo") => false


 */

function XO(str='') {
    str = str.toLowerCase()

    let countX = 0
    let countY = 0

    for (let i = 0; i < str.length; i++){
        const char = str[i]
        if(char === "x"){
            countX++
        }else if (char === "o"){
            countY++
        }
    }

    return countX === countY
}



 console.log(XO("ooxx"))
 console.log(XO("xooxx"))
 console.log(XO("ooxXm"))
 console.log(XO("zpzpzpp"))
 console.log(XO("zzoo"))
