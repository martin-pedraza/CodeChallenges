'''

Task

You are the manager of a supermarket.
You have a list of N items together with their prices that consumers bought on a particular day.
Your task is to print each item_name and net_price in order of its first occurrence.

'''
from collections import OrderedDict

N = int(input())
shopping = [input().rsplit(" ", 1) for _ in range(N)]

shopping_dict = OrderedDict()
for item_name, net_price in shopping:
    if item_name in shopping_dict:
        shopping_dict[item_name] += int(net_price)
    else:
        shopping_dict[item_name] = int(net_price)

for item, net_price in shopping_dict.items():
    print(f"{item} {net_price}")