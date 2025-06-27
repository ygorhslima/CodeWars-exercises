from random import randint

print("=-="*20)
print("VAMOS JOGAR PAR OU ÍMPAR")
print("=-="*20)
vitorias = 0

while True:
    jogador = int(input("diga um valor [entre 0 e 10]: "))
    while jogador > 10 or jogador < 0:
        jogador = int(input("\033[31mERRO!\033[m diga um valor [entre 0 e 10]: "))
    
    computador = randint(0,10)
    total = jogador + computador
   
    tipo = str(input("Par ou ímpar? [P/I]: ")).strip().upper()[0]
    while tipo not in 'PI':
        tipo = str(input("\033[31mERRO!\033[m Par ou ímpar? [P/I]: ")).strip().upper()[0]
    print(f"você jogou {jogador} e o computador {computador}. total de {total} ",end="")
    
    print("DEU PAR" if total % 2 == 0 else "DEU IMPAR")
    
    if tipo == 'P':
        if total % 2 == 0:
            print("você VENCEU!")
            vitorias += 1
        else:
            print("você PERDEU!")
            break

    if tipo == "I":
        if total % 2 == 1:
            print("você VENCEU!")
            vitorias += 1
        else:
            print("você PERDEU!")
            break

    print("vamos jogar novamente... ")
print(f"GAME OVER! você venceu {vitorias} vezes.")
