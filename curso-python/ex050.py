# Exercício 50: Desenvolva um programa que leia seis números inteiros e mostre a soma apenas daqueles que forem pares. Se o valor 
# digitado for ímpar, desconsidere-o.

soma = 0
cont = 0
for c in range(1,7):
    n = int(input(f"{c}°número: "))
    if n % 2 == 0:
        soma += n
        cont+=1
    
print(f"você informou {cont} valores pares digitados e a soma foi {soma}")