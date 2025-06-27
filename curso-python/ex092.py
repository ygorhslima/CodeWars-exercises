from datetime import datetime
# crie um programa que 


dados = {}
ano_atual = datetime.today().year

#leia nome,ano de nascimento e carteira de trabalho
dados['nome'] = str(input("Nome: "))
ano_nascimento = int(input("Ano de Nascimento:  "))
# e cadastre-os (com idade) em um dicionáio 
dados['idade'] = ano_atual - ano_nascimento
dados['ctps'] = int(input("Carteira de trabalho (0 não tem): "))


if dados['ctps'] == 0:
    print("\nPessoa sem carteira de trabalho.")
    for k,v in dados.items():
        print(f"- {k} tem o valor {v}")
    exit()

# se por acaso o CTPS for diferente de zero o dicionário receberá o ano de contratação e o salário
elif dados['ctps'] != 0:
    dados['contratação'] = int(input("Ano de contratação: "))
    dados['salário'] = float(input("Salário: R$"))


# calcule e acrescente além da idade, com quantos anos a pessoa vai se aposentar
dados['aposentadoria'] = dados['idade'] + ((dados['contratação'] + 35) - datetime.now().year)

for k,v in dados.items():
    print(f"- {k} tem o valor {v}")