from time import sleep
from random import randint

opcoes = {0: "Pedra",1: "Papel",2: "Tesoura"}
regras = {
    "Pedra":"Tesoura",
    "Papel":"Pedra",
    "Tesoura":"Papel"
}
print("Suas opções:")
for chave, valor in opcoes.items():
    print(f"[ {chave} ] {valor}")

jogador = int(input("qual a sua jogada: "))
computador = randint(0,2)

print("JO")
sleep(0.8)
print("KEN")
sleep(0.8)
print("PO!")

# Exibe as jogadas
print(f"Jogador jogou: {opcoes[jogador]}")
print(f"Computador jogou: {opcoes[computador]}")

if opcoes[jogador] == opcoes[computador]:
    print("deu empate")

# se a opção do jogador por exemplo for tesoura, a regra diz que tesoura ganha do papel, se o computador for igual ao papel, então jogador vence
elif regras[opcoes[jogador]] == opcoes[computador]:
    print("jogador venceu")
else:
    print("computador venceu")