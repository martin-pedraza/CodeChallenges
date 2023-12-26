'''

Staircase detail

This is a staircase of size n=4:

   #
  ##
 ###
####
Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size n.
'''
def staircase(n):
    for i in range(n):
        spaces = ' ' * (n - i - 1)
        hashes = '#' * (i + 1)
        print(spaces + hashes)

if __name__ == '__main__':
    n = int(input().strip())

    staircase(n)