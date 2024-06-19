'''

Note that you need to take exactly one element from each list, not necessarily the largest element. 
You add the squares of the chosen elements and perform the modulo operation. 
The maximum value that you can obtain, will be the answer to the problem.

'''
from itertools import product

K, M = map(int, input().split())
lists = []

for _ in range(K):
    numbers = list(map(int, input().split()))[1:]
    lists.append(numbers)

max_modulo = 0

for combination in product(*lists):
    modulo_result = sum(x ** 2 for x in combination) % M
    max_modulo = max(max_modulo, modulo_result)

print(max_modulo)