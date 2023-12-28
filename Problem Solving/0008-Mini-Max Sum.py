'''

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line of two space-separated long integers.

'''
def miniMaxSum(arr):
    sorted_numbers = sorted(arr)
    min_sum = sum(sorted_numbers[0:4])
    max_sum = sum(sorted_numbers[1:5])
    print(f"{min_sum} {max_sum}")

if __name__ == '__main__':

    arr = list(map(int, input().rstrip().split()))

    miniMaxSum(arr)