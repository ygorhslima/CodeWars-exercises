def msg(n):
    print("="*20)
    print(f"{n}".center(20))
    print("="*20)


def area(larg, alt):
    area = larg * alt
    print(f"A área de um terreno {larg} x {alt} é de {area}m²")


msg("Controle de Terrenos")
largura = float(input("LARGURA (m): "))
altura = float(input("COMPRIMENTO (m): "))

area(largura, altura)