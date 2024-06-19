'''

Sam is a professor at the university and likes to round each student's grade according to these rules:

If the difference between the grade and the next multiple of grade is less than 3, round grade up to the next multiple of 5.
If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

'''
import os
import math

def gradingStudents(grades):
    grades = map(check_grade, grades)
    return grades
    
def check_grade(grade):
    if grade >= 38 and grade % 5 in [3, 4]:
        grade = math.ceil(grade/5) * 5
    return grade

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    grades_count = int(input().strip())

    grades = []

    for _ in range(grades_count):
        grades_item = int(input().strip())
        grades.append(grades_item)

    result = gradingStudents(grades)

    fptr.write('\n'.join(map(str, result)))
    fptr.write('\n')

    fptr.close()
