'''

You are given a list of N lowercase English letters. 
For a given integer k, you can select any K indices (assume 1-based indexing) with a uniform probability from the list.

'''
from itertools import combinations

N = int(input())
elements = list(input().split())
K = int(input())

tuples = list(combinations(range(N), K))

count = sum([1 for tupl in tuples if any(elements[i] == "a" for i in tupl)])

print(count / len(tuples))
