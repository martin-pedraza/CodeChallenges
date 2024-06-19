"""

Given an array of integers and a positive integer k, determine the number of (i, j) pairs where i<j and  ar[i]+ar[j]  is divisible by k.
"""
import os

def divisibleSumPairs(n, k, ar):
    pairs = [[i, j] for i, value1 in enumerate(ar) for j, value2 in enumerate(ar) if (value1 + value2) % k == 0 and i > j]
    return len(pairs)

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    first_multiple_input = input().rstrip().split()

    n = int(first_multiple_input[0])

    k = int(first_multiple_input[1])

    ar = list(map(int, input().rstrip().split()))

    result = divisibleSumPairs(n, k, ar)

    fptr.write(str(result) + '\n')

    fptr.close()
