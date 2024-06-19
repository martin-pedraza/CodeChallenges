'''

An integer d is a divisor of an integer n if the remainder of n%d=0.

Given an integer, for each digit that makes up the integer determine whether it is a divisor. 
Count the number of divisors occurring within the integer.
'''
import os

def findDigits(n):
    return sum([1 for digit in str(n) if int(digit) != 0 and n % int(digit) == 0])

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    t = int(input().strip())

    for t_itr in range(t):
        n = int(input().strip())

        result = findDigits(n)

        fptr.write(str(result) + '\n')

    fptr.close()
