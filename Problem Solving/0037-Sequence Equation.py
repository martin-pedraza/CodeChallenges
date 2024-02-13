'''

Given a sequence of n integers, p(1), p(2),...,p(n) where each element is distinct and satisfies 1<=p(x)<=n. 
For each x where 1<=x<=n, that is x increments from 1 to n, 
find any integer y such that p(p(y))===x and keep a history of the values of y in a return array.

'''
import os

def permutationEquation(p):
    ids = {v: (i + 1) for i, v in enumerate(p)}
    rt = []
    for x in range(1, len(p) + 1):
        rt.append(ids[ids[x]])
    return rt

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    p = list(map(int, input().rstrip().split()))

    result = permutationEquation(p)

    fptr.write('\n'.join(map(str, result)))
    fptr.write('\n')

    fptr.close()
