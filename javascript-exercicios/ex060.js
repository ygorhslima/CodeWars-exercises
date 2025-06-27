const prompt = require('prompt-sync')();

let n = parseInt(prompt("Digite um número para calcular seu fatorial: "));
let contador = n;
let fat = 1;

process.stdout.write(`${n}! = `);

while (contador > 0) {
    process.stdout.write(`${contador}`);
    if (contador > 1) {
        process.stdout.write(" x ");
    } else {
        process.stdout.write(" = ");
    }
    fat *= contador;
    contador--;
}

console.log(fat);
