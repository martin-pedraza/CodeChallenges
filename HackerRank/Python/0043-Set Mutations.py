'''

TASK
You are given a set A and N number of other sets. 
These N number of sets have to perform some specific mutation operations on set A.

Your task is to execute those operations and print the sum of elements from set A.

'''
def perform_set_operation(A, N, operation):
    set_operations = {
        "update": A.update,
        "intersection_update": A.intersection_update,
        "difference_update": A.difference_update,
        "symmetric_difference_update": A.symmetric_difference_update
    }
    if operation in set_operations:
        set_operations[operation](N)

set_length = int(input())
A = set(list(map(int, input().split())))
other_set = int(input())
for _ in range(other_set):
    operation, set_size = input().split()
    N = set(list(map(int, input().split())))
    perform_set_operation(A, N, operation)
    
print(sum(A))