print("-"*40)
print("\033[32mLOJA SUPER BARATÃO\033[m".center(40))
print("-"*40)

total = 0 
produtosAcimaDe1000 = 0
produtoMaisBarato = 0
precoMaisBarato = 0
contador_produtos = 0

while True:
    nome_produto = str(input("\033[33mNome do Produto: \033[m"))
    preco_produto = float(input("\033[33mPreço do produto\033[m: R$"))
   
    contador_produtos += 1
    total += preco_produto

    if preco_produto > 1000:
        produtosAcimaDe1000 += 1
    
    if contador_produtos == 1 or preco_produto < precoMaisBarato:
        precoMaisBarato = preco_produto
        produtoMaisBarato = nome_produto
    

    resposta = ' '
    while resposta not in "SN":
        resposta = str(input("\033[31mQuer continuar? [S/N]\033[m: ")).strip().upper()[0]

    if resposta in "Nn":
        print("-"*20 ,"Fim do programa", "-"*20)
        break

print(f"O total da compra foi R${total:.2f}")
print(f"temos {produtosAcimaDe1000} produtos custando mais de R$1000.00")
print(f"o produto mais barato foi {produtoMaisBarato} que custa R${precoMaisBarato:.2f}")