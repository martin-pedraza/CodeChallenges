'''

Sample Designs

    Size: 7 x 21 
    ---------.|.---------
    ------.|..|..|.------
    ---.|..|..|..|..|.---
    -------WELCOME-------
    ---.|..|..|..|..|.---
    ------.|..|..|.------
    ---------.|.---------

'''
N = int(input().split()[0])
M = N * 3

pattern = ".|."
for _ in range(N//2):
    print(pattern.center(M, '-'))
    pattern += ".|..|."
    
print("WELCOME".center(M, '-'))

for _ in range(N//2):
    if len(pattern) > 3:
        pattern = pattern[:-6]
    print(pattern.center(M, '-'))