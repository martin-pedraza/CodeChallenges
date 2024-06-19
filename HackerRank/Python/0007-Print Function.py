'''

The included code stub will read an integer, n, from STDIN.

Without using any string methods, try to print the following:
123...n

Note that "..." represents the consecutive values in between.

'''
def output(n):
    output = ''
    for i in range(1, n +1):
        output += f'{i}'
    return output

if __name__ == '__main__':
    n = int(input())
    print(output(n))
