'''

Task

You are given two values a and b.
Perform integer division and print a/b.

'''
def division(a, b):
    try:
        print(int(a) // int(b))
    except ZeroDivisionError as e:
        print(f"Error Code: {e}")
    except ValueError as e:
        print(f"Error Code: {e}")
        

T = int(input().strip())
numbers = [input().split() for _ in range(T)]
for a, b in numbers:
    division(a, b)