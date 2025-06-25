/*
Vamos construir uma calculadora que pode calcular a média para um número arbitrário de argumentos.

O teste espera que você forneça um objeto Calculator com um método de média:

Calculator.average()

O teste também espera que, quando você não passar argumentos, ele retorne 0. Os argumentos devem ser inteiros.

Ele espera que Calculator.average(3,4,5) retorne 4.
*/

var Calculator = {
    average: function(...n) {  
        if (n.length == 0){
            return 0
        }
        let sum = 0
        n.forEach(element => sum += Math.floor(parseInt(element)))
        return sum / n.length  
    }
};

let v = 78.9
console.log(Math.floor(v))
let values = Calculator.average(3,4,5)
let values2 = Calculator.average(4.5,6.7,8.8)
console.log(values)
console.log(values2)