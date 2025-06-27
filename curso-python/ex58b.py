import random
from time import sleep
computador = random.randint(0,40)

print("sou seu computador... pensei em umm número entre 0 e 40")
print("será que você consegue adivinhar qual foi?")

acertou = False 
palpites = 0
while not acertou:
    jogador = int(input("qual é seu palpite?: "))
    palpites += 1
    if jogador == computador:
        acertou = True
    else:
        if jogador < computador:
            print("Mais... tente mais uma vez")
        elif jogador > computador:
            print("Menos... Tente mais uma vez")
print(f"Acertou com {palpites} tentativas. parabéns!")
