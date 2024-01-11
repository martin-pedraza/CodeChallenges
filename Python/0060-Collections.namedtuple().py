'''

Task

Dr. John Wesley has a spreadsheet containing a list of student's ID's, marks, class and name.

Your task is to help Dr. Wesley calculate the average marks of the students.

'''
from collections import namedtuple

N = int(input())
column = input().split()
Student = namedtuple("Student", column)
students = [Student(*input().split()) for _ in range(N)]

marks = sum(int(student.MARKS) for student in students)
print(marks / len(students))