'''

You will be given a 3X3 matrix s of integers in the inclusive range [1, 9]. 
We can convert any digit a to any other digit b in the range [1, 9] at cost of |a - b|. 
Given s, convert it into a magic square at minimal cost. 
Print this cost on a new line.

'''
import os

def totals(s, magicSquare):
    totalCost = []
    for i in range(3):
        rowCost = []
        for j in range(3):
            rowCost.append(abs(s[i][j]-magicSquare[i][j]))
        totalCost.append(sum(rowCost))

    return sum(totalCost)

def formingMagicSquare(s):
    magicSquares = [
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]]
        ]
    costTotals = []

    for i in magicSquares:
        costTotals.append(totals(s, i))
    return min(costTotals)

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = []

    for _ in range(3):
        s.append(list(map(int, input().rstrip().split())))

    result = formingMagicSquare(s)

    fptr.write(str(result) + '\n')

    fptr.close()
