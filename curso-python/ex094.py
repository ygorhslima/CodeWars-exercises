from datetime import datetime
ano_atual = datetime.today().year
pessoa = {}
lista = []
soma = 0
media = 0
totMulher = 0
# Estrutura principal
while True:
    # Leia o Nome:
    pessoa['nome'] = str(input("Nome: ")).strip()

    # estrutura de repetição para verificação do sexo, se o dado não for digitado corretamente ele vai mandar uma mensagem de erro
    while True:
        pessoa['sexo'] = str(input("Sexo[M/F]: ")).strip().upper()[0]
        if pessoa['sexo'] in 'Ff':
            totMulher += 1
        if pessoa['sexo'] in 'MF':
            break
        print("ERRO! por favor, digite apenas M ou F")

    # Leia a idade a partir do ano de nascimento
    pessoa['idade'] = int(input("Ano de Nascimento: "))
    pessoa['idade'] = ano_atual - pessoa['idade']

    soma += pessoa['idade']
    # copiando os dados do dicionário de pessoa para lista
    lista.append(pessoa.copy())

    # verificação se a pessoa quer ou não continuar
    while True:
        resp = str(input("Quer continuar?[S/N]: ")).strip().upper()
        if resp in 'SN':
            break
        print("ERRO! Responda apenas S ou N.")
    if resp == 'N':
        break

print("-="*40)
print(lista)

# quantas pessoas estão cadastradas
print(f"A) ao todo temos {len(lista)} pessoas cadastradas")
# média as idades
media = soma / len(lista)
print(f"B) A média de idade é de {media:5.2f} anos.")
# lista com todas as mulheres
print(f"o total de mulheres na lista é de {totMulher}")
print("C) as mulheres cadastradas foram ",end=' ')

for p in lista:
    if p['sexo'] == 'F':
        print(f"[{p['nome']}]", end=' ')
print()

# lista de pessoas acima da média de idade
print("D) lista das pessoas que estão acima da média da idade: ",end=' ')
for p in lista:
    if p['idade'] >= media:
        print("       ")
        for k,v in p.items():
            print(f"{k} = {v}", end=' ')
        print()
print("<< ENCERRADO >>")