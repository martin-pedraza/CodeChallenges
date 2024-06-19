'''

A newly opened multinational brand has decided to base their company logo on the three most common characters in the company name. 
They are now trying out various combinations of company names and logos based on this condition. 
Given a string s, which is the company name in lowercase letters, your task is to find the top three most common characters in the string.

Print the three most common characters along with their occurrence count.
Sort in descending order of occurrence count.
If the occurrence count is the same, sort the characters in alphabetical order.

'''
from collections import Counter
if __name__ == '__main__':
    s = input()
    char_count = dict(Counter(s))
    ordered_chars = sorted(char_count, key=lambda x: (-char_count[x], x))
    for char in ordered_chars[:3]:
        print(char, char_count[char])

