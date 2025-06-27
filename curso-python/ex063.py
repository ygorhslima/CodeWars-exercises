# Escreva um programa que leia um número n inteiro qualquer e mosta na tela os n primeiros elementos de uma sequência de fibonacci
# 0 -> 1 -> 1 -> 2 -> 3 -> 5 -> 8

n = int(input("digite um valor: "))
a=0
b=1

cont = 0
while cont < n:
    print(a, end="->")
    proximo = a + b
    a = b
    b = proximo
    cont += 1
print("fim")