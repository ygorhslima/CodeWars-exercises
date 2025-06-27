# Melhore o jogo do desafio 028 onde o computador vai "pensar" em um número entre 0 e 10
# só que agora o jogador vai tentar adivinhar até acertar, mostrando no final quantos palpites foram necesários para vencer
import random
from time import sleep

computador = random.randint(0,40)

print('='*20)
print("JOGO DA ADIVINHAÇÃO")
print("="*20)

print("olá jogador! vou pensar em um número entre 0 e 40, tente adivinhar...")

print('='*20)
print("pensando...")
print("="*20)
sleep(2)


tot_palpite = 1
palpite_jogador = int(input("qual seu palpite: "))

while palpite_jogador != computador:
    if palpite_jogador > computador:
        print("Menos... Tente mais uma vez")
    elif palpite_jogador < computador:
        print("Mais... tente mais uma vez")
    tot_palpite += 1
    palpite_jogador = int(input("qual seu palpite: "))

    
print(f"Acertou com {tot_palpite} tentativas. parabéns!")