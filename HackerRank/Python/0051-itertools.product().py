'''

Task
You are given a two lists A and B. Your task is to compute their cartesian product AXB.

'''
from itertools import product

A = list(map(int, input().split()))
B = list(map(int, input().split()))

print(*list(product(A, B)))