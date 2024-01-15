"""

An arcade game player wants to climb to the top of the leaderboard and track their ranking. 
The game uses Dense Ranking, so its leaderboard works like this:

The player with the highest score is ranked number 1 on the leaderboard.
Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.
"""
import os

def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            high = mid - 1
        else:
            low = mid + 1
    
    return low

def climbingLeaderboard(ranked, player):
    unique_rank = sorted(set(ranked), reverse=True)
    
    result = []
    
    for record in player:
        position = binary_search(unique_rank, record) + 1
        result.append(position)

    return result

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    ranked_count = int(input().strip())

    ranked = list(map(int, input().rstrip().split()))

    player_count = int(input().strip())

    player = list(map(int, input().rstrip().split()))

    result = climbingLeaderboard(ranked, player)

    fptr.write('\n'.join(map(str, result)))
    fptr.write('\n')

    fptr.close()
