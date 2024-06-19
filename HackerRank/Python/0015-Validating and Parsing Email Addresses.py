'''
A valid email address meets the following criteria:

It's composed of a username, domain name, and extension assembled in this format: username@domain.extension
The username starts with an English alphabetical character, 
and any subsequent characters consist of one or more of the following: alphanumeric characters, -,., and _.
The domain and extension contain only English alphabetical characters.
The extension is 1, 2, or 3 characters in length.
Given n pairs of names and email addresses as input, print each name and email address pair having a valid email address on a new line.

Hint: Try using Email.utils() to complete this challenge. 

'''
import email.utils

def check_chars(username):
    if not username[0].isalpha():
        return False
    valid_chars = set("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._")
    return all(char in valid_chars for char in username)

n = int(input().strip())

for _ in range(n):
    try:
        stdin = input()
        name, address = email.utils.parseaddr(stdin)
        username, rest = address.split('@')
        domain, extension = rest.split('.')
        
        if extension.isalpha() and domain.isalpha() and check_chars(username) and len(extension) <= 3:
            print(stdin)
    except ValueError:
        pass
