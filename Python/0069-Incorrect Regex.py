'''

You are given a string S.
Your task is to find out whether S is a valid regex or not.

'''
import re

def verify_regex(case):
    try:
        re.compile(case)
        print("True")
    except Exception:
        print("False")

cases = [input() for _ in range(int(input().strip()))]
for case in cases:
    verify_regex(case)
