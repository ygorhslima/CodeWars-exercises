
# leia o nome, idade e sexo de 4 pessoas. e no final do programa, mostre
somaIdade = 0
idade_homem_velho = 0
nome_homem_velho = ''
totMulher20 = 0

for pessoa in range(1,5):
    print("{} {}°a PESSOA {}".format('-'*5,pessoa,'-'*5))
    nome = input("Nome: ").strip()
    idade = int(input("idade: "))
    sexo = input("Sexo [M/F]: ").strip().upper()

    # somar as médias
    somaIdade += idade

    #verificando o homem mais velho do grupo
    if sexo in 'Mm' and idade > idade_homem_velho:
        idade_homem_velho = idade
        nome_homem_velho = nome
        
    #verificando mulheres com menos de 20 anos
    if sexo in "Ff" and idade < 20:
        totMulher20 += 1
        

# vou pegar a soma das médias e dividir por 4
media = somaIdade / 4
#a média de idade do grupo de pessoas
print(f"a média de idade do grupo é de {media}")
#o homem mais velho
print(f"o homem mais velho é {nome_homem_velho} e sua idade é {idade_homem_velho} anos")
#quantas mulheres com menos de 20 anos
print(f"Ao todo são {totMulher20} mulheres com menos de 20 anos")
