'''

Game Rules

Both players are given the same string, S.
Both players have to make substrings using the letters of the string S.
Stuart has to make words starting with consonants.
Kevin has to make words starting with vowels.
The game ends when both players have made all possible substrings.

'''
def minion_game(string):
    string = string.upper()
    vowels = 'AEIOU'
    length = len(string)
    
    stuart_points = sum(length - i for i in range(length) if string[i] not in vowels)
    kevin_points = sum(length - i for i in range(length) if string[i] in vowels)

    if kevin_points > stuart_points:
        print(f"Kevin {kevin_points}")
    elif kevin_points < stuart_points:
        print(f"Stuart {stuart_points}")
    else:
        print("Draw")

if __name__ == '__main__':
    s = input()
    minion_game(s)