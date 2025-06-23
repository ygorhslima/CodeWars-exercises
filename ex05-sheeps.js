/*Se você não consegue dormir, é só contar carneirinhos!!

Tarefa:
Dado um inteiro não negativo, 3 por exemplo, retorne uma string com um murmúrio: "1 carneirinho...2 carneirinhos...3 carneirinhos...". A entrada será sempre válida, ou seja, sem inteiros negativos.*/

var countSheep = function (num){
    let result = '' 
    for (let i=0; i < num; i++){
          result += `${i+1} sheep...`;
    }
    return result
}

console.log(countSheep(10))