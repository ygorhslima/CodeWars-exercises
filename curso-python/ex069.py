totPessoasMaioridade = 0
totHomens = 0
totMulher20 = 0

while True:
    print("-"*30)
    print("CADASTRE UMA PESSOA")
    print("-"*30)

    idade = int(input("Idade: "))
    
    sexo = ' '
    while sexo not in "MmFf":
        sexo = input("sexo [M/F]: ").strip().upper()[0]    

    if idade > 18 and sexo in "MF":
        totPessoasMaioridade += 1
    if idade < 20 and sexo in 'Ff':
        totMulher20 += 1
    if sexo == 'M':
        totHomens += 1

    resp = ' '
    while resp not in "SsNn":
        resp = input("quer continuar [S/N]:").strip().upper()[0]
    
    if resp in "Nn":
        print("saindo do programa...")
        break


print(f"Total de pessoas com mais de 18 anos: {totPessoasMaioridade}")
print(f"Ao todo temos {totHomens} homens cadastrados")
print(f"E temos {totMulher20} mulheres com menos de 20 anos")