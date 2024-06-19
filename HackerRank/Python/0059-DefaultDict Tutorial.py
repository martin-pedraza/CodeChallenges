'''

In this challenge, you will be given 2 integers, n and m. 
There are n words, which might repeat, in word group A. 
There are m words belonging to word group B. 
For each m words, check whether the word has appeared in group A or not. 
Print the indices of each occurrence of m in group A. 
If it does not appear, print -1.

'''
from collections import defaultdict

n, m = map(int, input().split())
A = [input() for _ in range(n)]
B = [input() for _ in range(m)]
d = defaultdict(list)

for index, word in enumerate(A):
    d[word].append(index + 1)

for item in B:
    print(*d[item]) if item in A else print("-1")