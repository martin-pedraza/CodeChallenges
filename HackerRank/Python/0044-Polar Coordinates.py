'''

Task
You are given a complex z. Your task is to convert it to polar coordinates.

'''
import cmath

complex_number = complex(input())
r = abs(complex_number)
q = cmath.phase(complex_number)
print(r)
print(q)