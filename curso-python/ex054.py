#Exercício Python 54: Crie um programa que leia o ano de nascimento de sete pessoas. No final, mostre quantas pessoas ainda não atingiram a maioridade e quantas já são maiores.
from datetime import date

ano_atual = date.today().year
totmaior = 0
totmenor = 0

for pess in range(1,8):
    ano_nascimento = int(input(f"em que ano a {pess}°a pessoa nasceu?: "))
    idade = ano_atual - ano_nascimento
    if idade >= 21:
        totmaior += 1
    else:
        totmenor += 1

print(f"{totmaior} pessoas atingiram a maioridade")
print(f"{totmenor} pessoas ainda não atingiram a maioridade")
