'''

Calculate and print the factorial of a given integer.

'''
def extraLongFactorials(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * extraLongFactorials(n - 1)

if __name__ == '__main__':
    n = int(input().strip())

    print(str(extraLongFactorials(n)))
