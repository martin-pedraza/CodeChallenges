'''

Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
'''
import os

def timeConversion(s):
    day_period = s[-2:]
    time = s[:-2]
    hour = time.split(':')[0]
    minute = time.split(':')[1]
    second = time.split(':')[2]
    
    if (day_period == "PM" and hour != "12") or (day_period == "AM" and hour == "12"):
        hour = str(int(hour) + 12)
        if hour == "24":
            hour = '00'
        time = f"{hour}:{minute}:{second}"
            
    return time

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = timeConversion(s)

    fptr.write(result + '\n')

    fptr.close()
