'''

Task

You are given a polynomial P of a single indeterminate (or variable), x.
You are also given the values of x and k. Your task is to verify if P(x)=k.

'''
x, k = map(int, input().split())
equation = input()
result = eval(equation.replace("x", str(x)))
print(result == k)