from time import sleep
import math

dados = []
while True:
    # criar as variáveis de nome, nota1, nota2 e média
    nome = input("Nome: ")
    nota1 = float(input("Nota 1: "))
    nota2 = float(input("Nota 2: "))
    media = (nota1 + nota2) / 2
    dados.append([nome, [nota1,nota2], media])
    resp = ' '
    while resp not in 'SNsn':
        resp = input("quer continuar [S/N]: ").strip().upper()
    if resp == 'N':
        print("saindo...")
        sleep(1)
        break

sleep(2)
print("-="*23)
print(f"{'No.':<4} {'NOME':<12} {'MÉDIA':>7}")
for i, aluno in enumerate(dados):
    print(f'{i:<4} {aluno[0]:<12} {aluno[2]}')
print("-"*23)

while True:
    indice = int(input("Mostrar notas de qual aluno? (999 interrompe): "))
    if indice == 999:
        break
    if indice >= 0 and indice < len(dados):
        print(f"notas de {dados[indice][0]} são {dados[indice][1]}")