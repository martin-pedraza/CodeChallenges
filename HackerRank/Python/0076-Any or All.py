"""

Task

You are given a space separated list of integers. 
If all the integers are positive, then you need to check if any integer is a palindromic integer.
"""
N = input()
numbers = list(map(int, input().split()))

print(any(str(number) == str(number)[::-1] for number in numbers)  and all(number > 0 for number in numbers))