"""

Two friends Anna and Brian, are deciding how to split the bill at a dinner. 
Each will only pay for the items they consume. 
Brian gets the check and calculates Anna's portion. 
You must determine if his calculation is correct.
"""
def bonAppetit(bill, k, b):
    del bill[k]
    result = b - sum(bill) // 2
    if result > 0:
        print(result)
    else:
        print("Bon Appetit") 

if __name__ == '__main__':
    first_multiple_input = input().rstrip().split()

    n = int(first_multiple_input[0])

    k = int(first_multiple_input[1])

    bill = list(map(int, input().rstrip().split()))

    b = int(input().strip())

    bonAppetit(bill, k, b)
