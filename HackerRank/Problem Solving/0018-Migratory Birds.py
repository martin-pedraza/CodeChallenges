"""

Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. 
If more than 1 type has been spotted that maximum amount, return the smallest of their ids.
"""
import os

def migratoryBirds(arr):
    birds_type = dict.fromkeys(arr, 0)
    for bird in arr:
        birds_type[bird] += 1
    most_common = max(birds_type.values())
    for bird in sorted(list(birds_type.keys())):
        if birds_type.get(bird) == most_common:
            return bird

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    arr_count = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    result = migratoryBirds(arr)

    fptr.write(str(result) + '\n')

    fptr.close()
