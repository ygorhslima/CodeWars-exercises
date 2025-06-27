
const prompt = require("prompt-sync")();
let metros = Number(prompt("digite um valor (em metros): "));
let cm = metros * 100
let mm = metros * 1000
console.log(`o valor ${metros} em metros para centímetro é ${cm}cm e para milímetro é ${mm}mm`);
