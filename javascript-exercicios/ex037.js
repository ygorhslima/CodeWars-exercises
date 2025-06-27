const prompt = require("prompt-sync")();

let n = parseInt(prompt("Leia um número qualquer: "));

console.log("\n" + "-=".repeat(10) + " MENU " + "-=".repeat(10));
console.log("Escolha sua operação:");
console.log("[ 1 ] para binário");
console.log("[ 2 ] para octal");
console.log("[ 3 ] para hexadecimal");

let operacao = parseInt(prompt("Escolha uma das operações acima: "));

if (operacao === 1) {
    console.log(`${n} em binário: ${n.toString(2)}`);
} else if (operacao === 2) {
    console.log(`${n} em octal: ${n.toString(8)}`);
} else if (operacao === 3) {
    console.log(`${n} em hexadecimal: ${n.toString(16)}`);
} else {
    console.log("❌ Opção inválida.");
}
