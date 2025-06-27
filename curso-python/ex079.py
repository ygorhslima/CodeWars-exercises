# criando a lista que guarda os valores
valores = []
# fazendo um enquanto infinito
while True:
    novos_valores = int(input("digite um valor: "))

    # verificar se 3já tem um valor igual
    if novos_valores not in valores:
        valores.append(novos_valores)
        valores.sort()
        print("valor adicionado com sucesso...")
    else:
        print('valor duplicado! Não vou adicionar...')

    # para verificar se o usuário quer ou não continuar
    resp = ' '
    while resp not in 'SNsn':
        resp = input("quer continuar [S/N]: ").strip().upper()
    
    if resp in 'Nn':
        print("saindo do programa...")
        break

print(valores)