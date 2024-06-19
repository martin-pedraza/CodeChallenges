"""

Given a year, y, find the date of the 256th day of that year according to the official Russian calendar during that year. 
Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is y.
"""
import os

def dayOfProgrammer(year):
    day = "13.09."+str(year)
    if year % 4 == 0:
        day = "12.09."+str(year)
        if year % 100 == 0 and year > 1918:
            day = "13.09."+str(year)
            if year % 400 == 0:
                day = "12.09."+str(year)
    if year == 1918:
        day = "26.09."+str(year)
    return day
                

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    year = int(input().strip())

    result = dayOfProgrammer(year)

    fptr.write(result + '\n')

    fptr.close()
