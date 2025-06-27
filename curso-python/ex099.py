# Faça um programa que tenha uma função
# chamado maior(), que receba vários parâmetros com valores inteiros
# seu programa tem que analisar todos os valores e dizer qual deles é o maior

def lin():
    print("-="*50)


def MaiorEMenorValor(* num):
    if len(num) == 0:
        print("nenhum valor foi informado")
        return
    
    cont = 0
    maior = menor = num[0]
    lin()
    print(f"valores informados: {num}")

    for valor in num:
        if valor > maior:
            maior = valor
        if valor < menor:
            menor = valor
        cont+=1

    print(f"foram digitados {cont} valores e o maior valor digitado foi {maior} e o menor valor foi {menor}")
    lin()



MaiorEMenorValor(10,20,30,40,50, 60,70,80,90,100,110)