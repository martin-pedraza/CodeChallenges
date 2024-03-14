'''

You are given a string S.
Your task is to find the first occurrence of an alphanumeric character in S (read from left to right) that has consecutive repetitions.

'''
import re
m = re.search(r'([A-Za-z0-9])\1', input())
res = m.group(1) if m else -1
print(res)