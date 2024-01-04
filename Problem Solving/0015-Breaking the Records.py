"""

Maria plays college basketball and wants to go pro. 
Each season she maintains a record of her play. 
She tabulates the number of times she breaks her season record for most points and least points in a game. 
Points scored in the first game establish her record for the season, and she begins counting from there.
"""
import os

def breakingRecords(scores):
    max_min_count = [0, 0]
    best_score = worst_score = scores[0]
    for score in scores:
        if score > best_score:
            best_score = score
            max_min_count[0] += 1
        elif score < worst_score:
            worst_score = score
            max_min_count[1] += 1
    return max_min_count

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    scores = list(map(int, input().rstrip().split()))

    result = breakingRecords(scores)

    fptr.write(' '.join(map(str, result)))
    fptr.write('\n')

    fptr.close()
