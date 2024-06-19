'''

Consider a list (list = []). You can perform the following commands:

1-insert i e: Insert integer e at position i.
2-print: Print the list.
3-remove e: Delete the first occurrence of integer e.
4-append e: Insert integer e at the end of the list.
5-sort: Sort the list.
6-pop: Pop the last element from the list.
7-reverse: Reverse the list.
Initialize your list and read in the value of n followed by n lines of commands where each command will be of the 7 types listed above. 
Iterate through each command in order and perform the corresponding operation on your list.

'''
def process_command(command, args=-1):
    match(command):
        case "insert":
            number_list.insert(int(args[0]), int(args[1]))
        case "print":
            print(number_list)
        case "remove":
            number_list.remove(int(args[0]))
        case "append":
            number_list.append(int(args[0]))
        case "sort":
            number_list.sort()
        case "pop":
            number_list.pop()
        case "reverse":
            number_list.reverse()
        case _:
            ""

if __name__ == '__main__':
    N = int(input())
    number_list = []
    for _ in range(N):
        instruction = input()
        command = instruction if len(instruction.split()) == 1 else instruction.split()[0]
        if len(instruction.split()) > 1:
            args = instruction.split()[1:]
        process_command(command, args)