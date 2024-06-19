'''

Task

Raghu is a shoe shop owner. His shop has X number of shoes.
He has a list containing the size of each shoe he has in his shop.
There are N number of customers who are willing to pay xi amount of money only if they get the shoe of their desired size.

Your task is to compute how much money Raghu earned.

'''
from collections import Counter

X = int(input())
shoes_dict = dict(Counter(list(map(int, input().split()))))

N = int(input())
customers = []
for _ in range(N):
    size, price = map(int, input().split())
    customers.append([size, price])

money = 0
for size, price in customers:
    if size in shoes_dict and shoes_dict[size] > 0:
        shoes_dict[size] -= 1
        money += price

print(money)
