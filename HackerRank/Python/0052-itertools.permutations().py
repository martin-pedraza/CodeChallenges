'''

Task
You are given a string S.
Your task is to print all possible permutations of size k of the string in lexicographic sorted order.

'''
from itertools import permutations

word, length = input().split()

for perm in sorted(permutations(word, int(length))):
    print("".join(perm))