'''

Task
You are given a string S.
Your task is to print all possible combinations, up to size k, of the string in lexicographic sorted order.

'''
from itertools import combinations

S, k = input().split()
for i in range(1, int(k) + 1):
    for comb in sorted(combinations(sorted(S), i)):
        print("".join(comb))