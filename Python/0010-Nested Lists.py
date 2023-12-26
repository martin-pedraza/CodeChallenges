'''
Given the names and grades for each student in a class of N students, 
store them in a nested list and print the name(s) of any student(s) having the second lowest grade.
Note: If there are multiple students with the second lowest grade, 
order their names alphabetically and print each name on a new line.

'''
if __name__ == '__main__':
    students = list()
    
    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])
    
    sorted_students = sorted(students, key=lambda x: (x[1], x[0]))
    
    first_score = sorted_students[0][1]
        
    filtered_students = [student for student in sorted_students if student[1] != first_score]
    
    if len(filtered_students) > 0:
        second_score = filtered_students[0][1]
        
        filtered_name_students = [student[0] for student in filtered_students if student[1] == second_score]
    
        for student in filtered_name_students:
            print(student)
