'''

A Discrete Mathematics professor has a class of students. 
Frustrated with their lack of discipline, the professor decides to cancel class if fewer than some number of students are present when class starts. 
Arrival times go from on time (arrivalTime <= 0) to arrived late (arrivalTime > 0).

Given the arrival time of each student and a threshhold number of attendees, determine if the class is cancelled.
'''
import os

def angryProfessor(k, a):
    counter = sum([1 for number in a if number <= 0])
    return "YES" if k > counter else "NO"

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    t = int(input().strip())

    for t_itr in range(t):
        first_multiple_input = input().rstrip().split()

        n = int(first_multiple_input[0])

        k = int(first_multiple_input[1])

        a = list(map(int, input().rstrip().split()))

        result = angryProfessor(k, a)

        fptr.write(result + '\n')

    fptr.close()
