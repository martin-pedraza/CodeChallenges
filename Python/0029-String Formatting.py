'''

The four values must be printed on a single line in the order specified above for each i from 1 to number. 
Each value should be space-padded to match the width of the binary value of number and the values should be separated by a single space.

'''
def print_formatted(number):
    width = len(str(bin(number))[2:]) + 1
    for iterator in range(1, number + 1):
        result = check_format(iterator, width)
        print(result)

def check_format(number, width):
    decimal = str(number).rjust(width - 1, ' ')
    octal = str(oct(number))[2:].rjust(width, ' ')
    hexadecimal = str(hex(number))[2:].upper().rjust(width, ' ')
    binary = str(bin(number))[2:].rjust(width, ' ')
    return f"{decimal}{octal}{hexadecimal}{binary}"

if __name__ == '__main__':
    n = int(input())
    print_formatted(n)