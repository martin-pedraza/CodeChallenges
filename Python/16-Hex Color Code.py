'''
CSS colors are defined using a hexadecimal (HEX) notation for the combination of Red, Green, and Blue color values (RGB).

Specifications of HEX Color Code

■ It must start with a '#' symbol.
■ It can have 3 or 6 digits.
■ Each digit is in the range of 0 to F. (1, 2, 3, 4, 5, 6, 7, 8, 9, 0, A, B, C, D, E and F).
■ A-F letters can be lower case. (a, b, c, d, e and f are also valid digits).

'''
def check_codes(line):
    i = 0
    valid_chars = set("0123456789abcdefABCDEF")
    while i < len(line):
        if line[i] == '#' and i + 1 < len(line) and i - 1 > 0:
            code = "#"
            i += 1
            while i < len(line) and line[i] in valid_chars:
                code += line[i]
                i += 1
            else:
                if len(code) == 4 or len(code) == 7:
                    print(code)
        else:
            i += 1

N = int(input().strip())
for _ in range(N):
    line = input()
    check_codes(line)