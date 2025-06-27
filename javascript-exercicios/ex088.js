const prompt = require("prompt-sync")();

let lista = [];
let jogos = [];

console.log("-=".repeat(40));
console.log("JOGA NA MEGA SENA".padStart(30));
console.log("-=".repeat(40));

let quant = Number(prompt("Quantos jogos você quer que eu sorteie: "));
let tot = 1;

while (tot <= quant) {
    let cont = 0;
    while (true) {
        let num = Math.floor(Math.random() * 60) + 1;
        if (!lista.includes(num)) {
            lista.push(num);
            cont++;
        }
        if (cont >= 6) break;
    }

    lista.sort((a, b) => a - b);
    jogos.push([...lista]);
    lista = [];
    tot++;
}

console.log("-=".repeat(3), `SORTEANDO ${quant} jogos`, "-=".repeat(3));

jogos.forEach((l, i) => {
    console.log(`jogo ${i + 1}: ${l}`);
});

console.log(`Os números sorteados foram: ${JSON.stringify(jogos)}`);
console.log("-=".repeat(30));
