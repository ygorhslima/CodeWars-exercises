const prompt = require("prompt-sync")();

// Lê o valor do ângulo em graus
const angulo = parseFloat(prompt("Valor do ângulo em graus: "));

// Converte para radianos
const anguloRadianos = angulo * Math.PI / 180;

// Calcula seno, cosseno e tangente
const seno = Math.sin(anguloRadianos);
const cosseno = Math.cos(anguloRadianos);
const tangente = Math.tan(anguloRadianos);

// Exibe os resultados com 2 casas decimais
console.log(`Seno: ${seno.toFixed(2)}`);
console.log(`Cosseno: ${cosseno.toFixed(2)}`);
console.log(`Tangente: ${tangente.toFixed(2)}`);
