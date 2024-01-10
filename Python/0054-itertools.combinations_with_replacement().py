'''

Task
You are given a string S.
Your task is to print all possible size k replacement combinations of the string in lexicographic sorted order.

'''
from itertools import combinations_with_replacement

S, k = input().split()
for comb in combinations_with_replacement(sorted(S), int(k)):
    print("".join(comb))