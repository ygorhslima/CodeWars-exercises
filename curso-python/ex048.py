#Exercício Python 48: Faça um programa que calcule a soma entre todos os números ímpares que são múltiplos de três e que se encontram no intervalo de 1 até 500.

numeros_identificados = 0
soma = 0
for c in range(1, 501, 2):
    if c % 3 == 0:
        soma += c
        numeros_identificados += 1


print(f"a soma de todos os {numeros_identificados} valores solicitados entre 1 e 500 é: {soma}")