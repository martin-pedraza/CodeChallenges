'''

You have two strings of lowercase English letters. You can perform two types of operations on the first string:

Append a lowercase English letter to the end of the string.
Delete the last character of the string. Performing this operation on an empty string results in an empty string.
Given an integer, k, and two strings, s and t, determine whether or not you can convert s to t by performing exactly k of the above operations on . 
If it's possible, print Yes. Otherwise, print No.

'''
import os

def appendAndDelete(s, t, k):
    a = list(s)
    b = list(t)
    
    for i in range(k):
        if a == b[:len(a)] and k - i == len(b[len(a):]):
            a.append(b[len(a)])
        else:
            if a:
                a.pop()

    return "Yes" if a == b else "No"

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    t = input()

    k = int(input().strip())

    result = appendAndDelete(s, t, k)

    fptr.write(result + '\n')

    fptr.close()
