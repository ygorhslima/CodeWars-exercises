#Exercício Python 53: Crie um programa que leia uma frase qualquer e diga se ela é um palíndromo, desconsiderando os espaços. Exemplos de palíndromos:

# APÓS A SOPA, A SACADA DA CASA, A TORRE DA DERROTA, O LOBO AMA O BOLO, ANOTARAM A DATA DA MARATONA.

frase = input("digite uma frase: ").strip().upper()
frase_sem_espaco = frase.replace(" ","")
inverso = ''

for letra in range(len(frase_sem_espaco)-1, -1, -1):
    inverso += frase_sem_espaco[letra]

print(inverso)

if frase_sem_espaco == inverso:
    print("é um palíndromo")
else:
    print("não é um palímdromo")
