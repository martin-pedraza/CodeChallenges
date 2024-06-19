'''

You are given n words. Some words may repeat. For each word, output its number of occurrences. 
The output order should correspond with the input order of appearance of the word. 
See the sample input/output for clarification.

'''
from collections import Counter

n = int(input())
words_count = dict(Counter(list(input() for _ in range(n))))
print(len(words_count))
print(*list(count for word, count in words_count.items()))