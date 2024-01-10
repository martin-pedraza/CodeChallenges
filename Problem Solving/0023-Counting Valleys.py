"""

An avid hiker keeps meticulous records of their hikes. 
During the last hike that took exactly steps steps, for every step it was noted if it was an uphill, U, or a downhill, D step. 
Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. 
We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.
"""
import os

def countingValleys(steps, path):
    sea = 0
    count = 0
    
    for s in path:
        sea += 1 if s == "U" else -1
        count += sea == 0 and s == "U"
            
    return count

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    steps = int(input().strip())

    path = input()

    result = countingValleys(steps, path)

    fptr.write(str(result) + '\n')

    fptr.close()
