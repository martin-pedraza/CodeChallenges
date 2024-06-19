'''

Sample Output

--------e--------
------e-d-e------
----e-d-c-d-e----
--e-d-c-b-c-d-e--
e-d-c-b-a-b-c-d-e
--e-d-c-b-c-d-e--
----e-d-c-d-e----
------e-d-e------
--------e--------

'''
def print_rangoli(size):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    
    if size == 1:
        print('a')
        return

    for i in range(size):
        letters_left = "-".join(alphabet[size - j - 1] for j in range(i))
        letters_right = letters_left[::-1]
        main = "-".join(alphabet[size - i - 1])
        line = "-".join([letters_left, main, letters_right]).center(size * 4 - 3, '-')
        print(line)
        
    for i in range(size - 2, -1, -1):
        letters_left = "-".join(alphabet[size - j - 1] for j in range(i))
        letters_right = letters_left[::-1]
        main = "-".join(alphabet[size - i - 1])
        line = "-".join([letters_left, main, letters_right]).center(size * 4 - 3, '-')
        print(line)
        
if __name__ == '__main__':
    n = int(input())
    print_rangoli(n)