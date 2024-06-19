'''
You are given two sets, A and B.
Your job is to find whether set A is a subset of set B.

If set A is subset of set B, print True.
If set A is not a subset of set B, print False.

Input Format

The first line will contain the number of test cases, T.
The first line of each test case contains the number of elements in set A.
The second line of each test case contains the space separated elements of set A.
The third line of each test case contains the number of elements in set B.
The fourth line of each test case contains the space separated elements of set B.

'''
# Enter your code here. Read input from STDIN. Print output to STDOUT
T = int(input().strip())
for _ in range(T):
    elements_A = int(input().strip())
    A = set(map(int, input().split()))
    elements_B = int(input().strip())
    B = set(map(int, input().split()))
    
    print(A.issubset(B))
