# crie um programa que leia vários números inteiros pelo teclado. 
# no final da execução, mostre a média entre todos os valores e 
# qual foi o maior e o menor valor lido.O programa deve perguntar a
# o usuário se ele quer ou não continuar a digitar valores

resp = 'S'
media = 0
soma = 0
quant = 0
maior = 0
menor = 0

while resp == 'S':
    n = int(input("digite um valor: "))
    quant += 1
    soma += n
    
    if quant == 1:
        maior = menor = n
    else:
        if n > maior:
            maior = n
        if n < menor:
            menor = n

    resp = input("quer continuar? [S/N]: ").strip().upper()
    while resp not in ["S", "N"]:
        resp = input("resposta inválida. quer continuar? [S/N]: ").strip().upper()
    

media = soma / quant
print(f"você digitou {quant} valores e e a média {media}")
print(f"O maior valor foi {maior} e o menor foi {menor}")
