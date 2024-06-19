'''

Given a right-angled triangle where the lengths of two sides, AB and BC, are known, calculate angle B. 
Given the lengths of sides AB and BC as input, determines angle B in degrees, 
rounding it to the nearest degree, and displays the result along with the degree symbol (°).

'''
import math

AB = int(input())
BC = int(input())
angel = int(round(math.degrees(math.atan(AB/BC))))
print(f"{angel}\u00b0")