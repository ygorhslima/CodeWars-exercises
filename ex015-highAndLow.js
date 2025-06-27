/*
Nesta pequena tarefa, você recebe uma sequência de números separados por espaços e deve retornar o maior e o menor número.
Exemplos

highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Observações

Todos os números são Int32 válidos, não há necessidade de validá-los.
Sempre haverá pelo menos um número na sequência de entrada.
A sequência de saída deve conter dois números separados por um único espaço, e o maior número vem primeiro.
*/

function highAndLow(numbers = ''){
    const nums = numbers.split(' ')
    let maior = -Infinity
    let menor = Infinity

    nums.forEach((element)=>{
        const num = parseInt(element, 10);
        if(num > maior){
            maior = num;
        }
        
        if(num < menor){
            menor = num;
        }
    })
    return `${maior} ${menor}`;
}

const h1 = highAndLow("1 2 3 4 5");
const h2 = highAndLow("1 2 -3 4 5");
const h3 = highAndLow("1 9 3 4 -5");

console.log(h1)
console.log(h2)
console.log(h3)
