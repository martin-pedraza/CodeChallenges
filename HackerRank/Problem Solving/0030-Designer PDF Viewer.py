'''

A video player plays a game in which the character competes in a hurdle race. 
Hurdles are of varying heights, and the characters have a maximum height they can jump. 
There is a magic potion they can take that will increase their maximum jump height by 1 unit for each dose. 
How many doses of the potion must the character take to be able to jump all of the hurdles. 
If the character can already clear all of the hurdles, return 0.
'''
import os

def designerPdfViewer(h, word):
    return len(word) * max([h[ord(i) - ord('a')] for i in word])

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    h = list(map(int, input().rstrip().split()))

    word = input()

    result = designerPdfViewer(h, word)

    fptr.write(str(result) + '\n')

    fptr.close()
