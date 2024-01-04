'''

Task
You have a non-empty set s, and you have to execute N commands given in N lines.

The commands will be pop, remove and discard.

'''
def execute_command(numbers, command, number):
    switch_dict = {
        "remove": remove_number,
        "discard": discard_number,
        "pop": pop_number
    }
    selected_case = switch_dict.get(command)
    selected_case(numbers, number)
    
def pop_number(numbers, _):
    numbers.pop()
def remove_number(numbers, number):
    numbers.remove(number)
def discard_number(numbers, number):
    numbers.discard(number)
def print_sum(numbers):
    print(sum(numbers))

n = int(input())
s = set(map(int, input().split()))
N = int(input())

for _ in range(N):
    input_parts = input().split()
    command = input_parts[0]
    number = int(input_parts[1]) if len(input_parts) > 1 else None
    execute_command(s, command, number)
print_sum(s)