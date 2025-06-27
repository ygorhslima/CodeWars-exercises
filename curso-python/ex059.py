# crie um programa que leia dois valores e mostre um enu na tela
# [1] somar
# [2] multiplicar
# [3] maior
# [4] novos números
# [5] sair do programa

# seu programa deverá realizar a operação solicitada em casa caso
from time import sleep

num1 = int(input("Digite um valor: "))
num2 = int(input("Digite outro valor: "))

opcao = 0
while opcao != 5:
    print("[1] Somar")
    print("[2] Multiplicar")
    print("[3] Maior")
    print("[4] Novos números")
    print("[5] sair do programa")

    opcao = int(input(">>>>>>>> opção: "))

    if opcao == 1:
        soma = num1 + num2
        print(f"Resultado: {num1} + {num2} = {soma}")
    elif opcao == 2:
        multi = num1 * num2
        print(f"Resultado: {num1} x {num2} = {multi}")
    elif opcao == 3:
        if num1 > num2:
            maior = num1
        else:
            maior = num2
        print("entre {} e {} o maior valor é {}".format(num1,num2,maior))
    elif opcao == 4:
        num1 = int(input("digite um novo valor: "))
        num2 = int(input("digite um outro novo valor: "))
    elif opcao == 5:
        print("saindo do programa")
    else:
        print("opção inválida! tente novamente")
    print("=-="*20)
    sleep(2)
print("FIM DO PROGRAMA")