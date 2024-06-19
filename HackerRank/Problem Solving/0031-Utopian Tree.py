'''

The Utopian Tree goes through 2 cycles of growth every year. 
Each spring, it doubles in height. Each summer, its height increases by 1 meter.

A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring. 
How tall will the tree be after n growth cycles?
'''
import os

def utopianTree(n):
    height = 1
    for number in range(1, n + 1):
        height = height + 1 if number % 2 == 0 else height * 2
    return height

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    t = int(input().strip())

    for t_itr in range(t):
        n = int(input().strip())

        result = utopianTree(n)

        fptr.write(str(result) + '\n')

    fptr.close()
