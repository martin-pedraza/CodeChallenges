'''

A jail has a number of prisoners and a number of treats to pass out to them. 
Their jailer decides the fairest way to divide the treats is to seat the prisoners around a circular table in sequentially numbered chairs. 
A chair number will be drawn from a hat. 
Beginning with the prisoner in that chair, one candy will be handed to each prisoner sequentially around the table until all have been distributed.

The jailer is playing a little joke, though. The last piece of candy looks like all the others, but it tastes awful. 
Determine the chair number occupied by the prisoner who will receive that candy.

There are 4 prisoners, 6 pieces of candy and distribution starts at chair 2. 
The prisoners arrange themselves in seats numbered 1 to 4. 
Prisoners receive candy at positions 2, 3, 4, 1, 2, 3. 
The prisoner to be warned sits in chair number 3.

'''
import os

def circularArrayRotation(a, k, queries):
    array = a
    rotations = k % len(array)
    
    new_array = array[-rotations:] + array[:-rotations]
    
    return [new_array[q] for q in queries]

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    first_multiple_input = input().rstrip().split()

    n = int(first_multiple_input[0])

    k = int(first_multiple_input[1])

    q = int(first_multiple_input[2])

    a = list(map(int, input().rstrip().split()))

    queries = []

    for _ in range(q):
        queries_item = int(input().strip())
        queries.append(queries_item)

    result = circularArrayRotation(a, k, queries)

    fptr.write('\n'.join(map(str, result)))
    fptr.write('\n')

    fptr.close()
