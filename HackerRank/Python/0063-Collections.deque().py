'''

Task

Perform append, pop, popleft and appendleft methods on an empty deque d.

'''
from collections import deque

def deque_pop(d, _):
    d.pop()
    
def deque_append(d, number):
    d.append(int(number))
    
def deque_appendleft(d, number):
    d.appendleft(int(number))
    
def deque_popleft(d, _):
    d.popleft()

def execute_command(d, command):
    option_dict = {
        "append": deque_append,
        "appendleft": deque_appendleft,
        "pop": deque_pop,
        "popleft": deque_popleft
    }
    
    selected_command = option_dict[command[0]]
    number = command[1] if len(command) > 1 else None
    selected_command(d, number)

N = int(input())
d = deque()
commands = [input().split() for _ in range(N)]

for command in commands:
    execute_command(d, command)
    
print(*d)