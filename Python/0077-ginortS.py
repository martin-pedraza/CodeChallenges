"""

You are given a string S.
S contains alphanumeric characters only.
Your task is to sort the string S in the following manner:

All sorted lowercase letters are ahead of uppercase letters.
All sorted uppercase letters are ahead of digits.
All sorted odd digits are ahead of sorted even digits.
"""
li = sorted(list(input()))
low = up = odd = even = ''
for char in li:
    if char.islower():
        low += char
    elif char.isupper():
        up += char
    elif int(char)%2 == 1:
        odd += char
    else:
        even += char
print(low + up + odd + even) 