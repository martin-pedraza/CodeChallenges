'''

There is an array of n integers. There are also 2 disjoint sets, A and B, each containing m integers. 
You like all the integers in set A and dislike all the integers in set B. 
Your initial happiness is 0. For each i integer in the array, if i E A, you add 1 to your happiness. 
If i E B, you add -1 to your happiness. 
Otherwise, your happiness does not change. Output your final happiness at the end.
'''
def print_happiness(arr, A, B):
    happiness = 0 + sum(-1 for i in arr if i in B) + sum(1 for i in arr if i in A)
    print(happiness)

n, m = map(int, input().split())
arr = list(map(int, input().split()))
A = set(list(map(int, input().split())))
B = set(list(map(int, input().split())))
print_happiness(arr, A, B)