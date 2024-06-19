'''

You are given a string S. It consists of alphanumeric characters, spaces and symbols(+,-).
Your task is to find all the substrings of S that contains 2 or more vowels.
Also, these substrings must lie in between 2 consonants and should contain vowels only.

'''
import re

print(*re.findall("(?<=[^aeiou])[aeiou]{2,}(?=[^aeiou])", input().strip(), re.I) or [-1], sep="\n")