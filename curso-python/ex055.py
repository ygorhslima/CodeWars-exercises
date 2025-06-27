#Exercício Python 55: Faça um programa que leia o peso de cinco pessoas. No final, mostre qual foi o maior e o menor peso lidos.

maiorpeso = 0
menorpeso = 0

for p in range(1,6):
    peso = float(input(f"Peso da {p}°a pessoa: "))
    if p == 1:
        maiorpeso = peso
        menorpeso = peso
    else:
        if peso > maiorpeso:
            maiorpeso = peso
        if peso < menorpeso:
            menorpeso = peso

print(f"O maior peso lido foi de {maiorpeso}Kg")
print(f"O menor peso lido foi de {menorpeso}Kg")