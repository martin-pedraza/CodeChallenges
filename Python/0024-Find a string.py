'''

In this challenge, the user enters a string and a substring. 
You have to print the number of times that the substring occurs in the given string. 
String traversal will take place from left to right, not from right to left.

'''
def count_substring(string, sub_string):
    count = 0
    start_index = 0

    while start_index < len(string):
        index = string.find(sub_string, start_index)
        if index == -1:
            break
        count += 1
        start_index = index + 1

    return count

if __name__ == '__main__':
    string = input().strip()
    sub_string = input().strip()
    
    count = count_substring(string, sub_string)
    print(count)