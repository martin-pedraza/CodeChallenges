'''

You are given a spreadsheet that contains a list of N athletes and their details (such as age, height, weight and so on). 
You are required to sort the data based on the Kth attribute and print the final resulting table.

'''
import os

def sort_athletes(athletes, column):
    athletes.sort(key=lambda x: x[column])
    return "\n".join([" ".join(map(str, athlete)) for athlete in athletes])

if __name__ == '__main__':
    first_multiple_input = input().rstrip().split()

    n = int(first_multiple_input[0])

    m = int(first_multiple_input[1])

    arr = []

    for _ in range(n):
        arr.append(list(map(int, input().rstrip().split())))

    k = int(input().strip())
    
    message = sort_athletes(arr, k)
    
    print(message)
