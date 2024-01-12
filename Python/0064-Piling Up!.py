'''

There is a horizontal row of n cubes. 
The length of each cube is given. 
You need to create a new vertical pile of cubes. 
The new pile should follow these directions: if cube[i] is on top of cube[j] then sideLength[j] >= sideLength[i].

When stacking the cubes, you can only pick up either the leftmost or the rightmost cube each time. 
Print Yes if it is possible to stack the cubes. 
Otherwise, print No.

'''
from collections import deque

for _ in range(int(input())):
    _, b = int(input()), deque(input().split())
    min_value = float("inf")
  
    while len(b) > 1:
        current = int(b.pop() if int(b[-1]) > int(b[0]) else b.popleft())
        
        if current > min_value:
            print("No")
            break
        
        min_value = current
    else:
        print("Yes")
