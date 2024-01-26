'''

Task

The National University conducts an examination of N students in X subjects.
Your task is to compute the average scores of each student.

'''
all_marks = []
for _ in range(int(input().split()[1])):
    marks = list(map(float, input().split()))
    all_marks.append(marks)

students = list(zip(*all_marks))

for student in students:
    print(sum(student) / len(student))