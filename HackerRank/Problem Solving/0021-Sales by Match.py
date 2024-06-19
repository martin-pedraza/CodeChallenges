"""

There is a large pile of socks that must be paired by color. 
Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
"""
import os

def sockMerchant(n, ar):
    sock_dict = dict.fromkeys(set(ar), 0)
    for number in ar:
        sock_dict[number] += 1
    count = [v//2 for k, v in sock_dict.items() if v >= 2]
    return sum(count)

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    ar = list(map(int, input().rstrip().split()))

    result = sockMerchant(n, ar)

    fptr.write(str(result) + '\n')

    fptr.close()
