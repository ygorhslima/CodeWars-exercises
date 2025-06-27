from time import sleep
# elabora um programa que calcule o valor a ser pago por um produto considerando o seu preço normal e condição de pagamento

# à vista dinheiro / cheque: 10% de desconto
# à vista no cartão: 5% de desconto
# em até 2x no cartão: preço normal
# 3x ou mais no cartão: 20% de juros

print(f"\033[31;44m{'='*10}LOJAS GUANABARA{'='*10}\033[m")
preco = float(input("Preço das compras: R$"))

sleep(1)


print('='*20)
print("FORMAS DE PAGAMENTO")
print("\033[32m[ 1 ] à vista dinheiro/cheque\033[m")
print("\033[32m[ 2 ] à vista cartão\033[m")
print("\033[32m[ 3 ] 2x no cartão\033[m")
print("\033[32m[ 4 ] 3x ou mais no cartão\033[m")
opcao = int(input("qual é a opção?: "))
print('='*20)

print("-=-="*10)
print("analisando")
print("-=-="*10)
sleep(1)

if opcao == 1:
    total = preco - (preco * 10 / 100)
elif opcao == 2:
    total = preco - (preco * 5 / 100)
elif opcao == 3:
    total = preco
    parcela = total / 2
    print(f"sua compra será parcelada em 2x de R${parcela}")
elif opcao == 4:
    total = preco + (preco * 20 / 100)
    totparc = int(input("quantas parcelas?"))
    parcela = total / totparc
    print(f"sua compra será parcelada em {totparc}x de R${parcela:.2f} com JUROS")
else:
    print("OPÇÃO INVÁLIDA DE PAGAMENTO")
    total = 0

print(f"sua compra de R${preco:.2f} vai custar R${total:.2f} no final")