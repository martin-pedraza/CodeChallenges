'''

Function Description

Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.
aVeryBigSum has the following parameter(s):
int ar[n]: an array of integers .

'''
def aVeryBigSum(ar):
    return sum(ar)

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    ar_count = int(input().strip())

    ar = list(map(int, input().rstrip().split()))

    result = aVeryBigSum(ar)

    fptr.write(str(result) + '\n')

    fptr.close()
