/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

/*
Escreva a função IMC que calcula o índice de massa corporal (IMC = peso / altura²).

Se IMC <= 18,5, retorne "Abaixo do peso".

Se IMC <= 25,0, retorne "Normal".

Se IMC <= 30,0, retorne "Sobrepeso".

Se IMC > 30, retorne "Obeso".

bmi(50, 1.80), "Underweight", "For weight = 50 and height = 1.80")
*/

function bmi(weight, height) {
    let calculatedBMI = weight / (height * height)
  
    if (calculatedBMI <= 18.5){
        return "Underweight"
    }
    
    else if(calculatedBMI <= 25.0){
        return "Normal"
    }
    
    else if(calculatedBMI <= 30.0){
        return "Overweight"
    }
    
    else if(calculatedBMI > 30){
        return "Obese";
    }
}


const weight1 = 50; 
const height1 = 1.80; 
const result1 = bmi(weight1, height1);
console.log(`For weight = ${weight1}kg and height = ${height1}m, BMI is ${result1}`);

