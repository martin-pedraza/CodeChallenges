'''

Given a square matrix, calculate the absolute difference between the sums of its diagonals.

'''
import os

def diagonalDifference(arr):
    array_size = len(arr)
    first_diagonal = 0
    second_diagonal = 0
    for i in range(array_size):
        first_diagonal += arr[i][i]
        second_diagonal += arr[i][array_size - 1 - i]
    return abs(first_diagonal - second_diagonal)

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    arr = []

    for _ in range(n):
        arr.append(list(map(int, input().rstrip().split())))

    result = diagonalDifference(arr)

    fptr.write(str(result) + '\n')

    fptr.close()