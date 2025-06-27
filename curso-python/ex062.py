# melhore o desafio 61, perguntando para o usuário se ele quer mostrar mais alguns termos. o programa encerra qunado ele disser que quer mostrar O termos.

primeiro = int(input("Primeiro termo: "))
razao = int(input("Razão: "))
termo = primeiro

cont = 1
total = 0
mais = 10

while mais != 0:
    total = total + mais
    while cont <= total:
        print(f"{termo}->",end="")
        termo += razao
        cont += 1
    print("PAUSA")
    mais = int(input("quantos valores você a mais?: "))

print(f"progressão finalizada com {total} termos mostrados")