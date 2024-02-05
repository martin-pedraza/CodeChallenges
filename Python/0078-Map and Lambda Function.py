'''

You have to generate a list of the first N fibonacci numbers, 0 being the first number. 
Then, apply the map function and a lambda expression to cube each fibonacci number and print the list.
'''
cube = lambda x: x**3

def fibonacci(n):
    a, b = 0, 1
    numbers = [a]
    for _ in range(n - 1):
        a, b = b, a + b
        numbers.append(a)
    return numbers if n > 0 else []

if __name__ == '__main__':
    n = int(input())
    print(list(map(cube, fibonacci(n))))