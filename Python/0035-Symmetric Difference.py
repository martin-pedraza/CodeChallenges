'''

Task
Given 2 sets of integers, M and N, print their symmetric difference in ascending order. 
The term symmetric difference indicates those values that exist in either M or N but do not exist in both.

'''
def print_diff(a, b):
    a_b = a.difference(b)
    b_a = b.difference(a)
    a_b.update(b_a)
    for item in sorted(list(a_b)):
        print(item)
    
M = int(input())
a = set(map(int, input().split()))
N = int(input())
b = set(map(int, input().split()))
print_diff(a, b)