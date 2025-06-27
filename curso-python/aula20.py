def lin():
    print("-="*50)


def contador(*num):
    tam = len(num)
    print(f"recebi os números {num} e são ao todo {tam} valores")


lin()
contador(2,1,7)
contador(8,0)
contador(6,7,5,3,5,2)
lin()


def dobra(lst):
    pos = 0
    while pos < len(lst):
       lst[pos] *= 2
       pos += 1

def soma(* valores):
    s = 0
    for num in valores:
        s+=num

valores = [7,2,5,0,4]
dobra(valores)
print(valores)