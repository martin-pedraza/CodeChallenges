'''

A child is playing a cloud hopping game. 
In this game, there are sequentially numbered clouds that can be thunderheads or cumulus clouds. 
The character must jump from cloud to cloud until it reaches the start again.

There is an array of clouds, c and an energy level e=100. 
The character starts from c[0] and uses 1 unit of energy to make a jump of size k to cloud c[(i+k)]%n. 
If it lands on a thundercloud, c[i]=1, its energy (e) decreases by 2 additional units. 
The game ends when the character lands back on cloud 0.

Given the values of n, k, and the configuration of the clouds as an array , determine the final value of e after the game ends.

'''
import os
import math

def jumpingOnClouds(c, k):
    n = len(c)
    e = 100
    k = k if n % k == 0 else math.gcd(n, k)
    for i in range(0, n, k):
        e -= 3 if c[i] == 1 else 1
    return e

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    nk = input().split()

    n = int(nk[0])

    k = int(nk[1])

    c = list(map(int, input().rstrip().split()))

    result = jumpingOnClouds(c, k)

    fptr.write(str(result) + '\n')

    fptr.close()
