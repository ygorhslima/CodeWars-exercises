const prompt = require("prompt-sync")();

console.log("-=".repeat(20));
console.log("Analisador de Triângulos");
console.log("-=".repeat(20));

const r1 = parseFloat(prompt("Digite a primeira reta: "));
const r2 = parseFloat(prompt("Digite a segunda reta: "));
const r3 = parseFloat(prompt("Digite a terceira reta: "));

if ((r1 + r2 > r3) && (r1 + r3 > r2) && (r2 + r3 > r1)) {
    console.log("Os segmentos acima PODEM FORMAR um triângulo");
    if ((r1 == r2) && (r2 == r3) && (r3 == r1)){
        console.log("EQUILÁTERO")
    }else if((r1 != r2) && (r2 != r3) && (r1 != r3)){
        console.log("ESCALENO")
    }else{
        console.log("ISÓSCELES")
    }
} else {
    console.log("Os segmentos acima NÃO PODEM FORMAR um triângulo");
}