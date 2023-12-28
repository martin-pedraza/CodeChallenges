'''

Task
Read a given string, change the character at a given index and then print the modified string.

'''
def mutate_string(string, position, character):
    mutated_string = list(string)
    mutated_string[position] = character
    return "".join(mutated_string)

if __name__ == '__main__':
    s = input()
    i, c = input().split()
    s_new = mutate_string(s, int(i), c)
    print(s_new)