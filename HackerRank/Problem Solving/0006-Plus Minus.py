'''

Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
Print the decimal value of each fraction on a new line with 6 places after the decimal.
'''
def plusMinus(arr):
    positive = 0
    negative = 0
    zero = 0
    
    for number in arr:
        if number > 0:
            positive += 1
        elif number < 0:
            negative += 1
        else:
            zero += 1
        
    print(f"{positive/len(arr):.6f}")
    print(f"{negative/len(arr):.6f}")
    print(f"{zero/len(arr):.6f}")
    
if __name__ == '__main__':
    n = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    plusMinus(arr)