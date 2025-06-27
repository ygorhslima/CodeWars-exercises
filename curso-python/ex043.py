#desenvolva uma lógica que leia o peso e a altura de uma pessoa
peso = float(input("qual é seu peso (KG): "))
altura = float(input("qual é sua altura (m): "))

IMC = peso / (altura ** 2)
print(f'seu IMC foi {IMC:.1f}')

#calcule seu IMC e mostre seu status, de acordo com a tabela abaixo:
#abaixo de 18.5: abaixo do peso
#entre 18.5 a 25: peso ideal
#25 até 30: sobrepeso
#30 até 40: obesidade
# acima de 40: obesidade mórbida

if IMC < 18.5:
    print("\033[30me você está abaixo do peso\033[m")
elif IMC >= 18.5 and IMC < 25:
    print("\033[32me você está no peso ideal\033[m")
elif IMC >= 25 and IMC < 30:
    print("\033[33me você está em sobrepeso\033[m")
elif IMC >= 30 and IMC < 40:
    print("\033[35me você está em obesidade\033[m")
else:
    print("\033[31me você está em obesidade mórbida, procure um médico o quanto é tempo!\033[m")