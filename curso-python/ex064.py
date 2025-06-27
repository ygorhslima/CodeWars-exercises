# Crie um programa que leia vários números inteiros pelo teclado. o programa só vai parar quando o usuário digitar o valor 999
# que é a condição de parada, no final mostre quantos números foram digitados e qual foi a soma entre eles (desconsiderando o flag)


soma_valores = 0
cont = 0

num = int(input("digite um valor [999 para parar]: ")) 
while num != 999:
    soma_valores += num
    cont += 1
    num = int(input("digite um valor [999 para parar]: ")) 

print(f"você digitou {cont} números e a soma entre eles foi {soma_valores}")
