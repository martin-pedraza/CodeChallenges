"""

Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.
"""
import os
from collections import Counter

def pickingNumbers(a):
    counter = Counter(a)
    max_length = 0
    for number in counter:
        max_length = max(max_length, counter[number] + counter[number + 1])
    return max_length

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    a = list(map(int, input().rstrip().split()))

    result = pickingNumbers(a)

    fptr.write(str(result) + '\n')

    fptr.close()
