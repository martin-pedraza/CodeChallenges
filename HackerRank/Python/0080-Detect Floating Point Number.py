'''

You are given a string N.
Your task is to verify that N is a floating point number.
'''
for _ in range(int(input())):
    input_data = input()
    try:
        if input_data.split('.')[1] == '':
            print(False)
            continue
        if float(input_data):
            print(True)
    except:
        print(False)