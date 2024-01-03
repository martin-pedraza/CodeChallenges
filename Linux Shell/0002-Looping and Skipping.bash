# Your task is to use for loops to display only odd natural numbers from 1 to 99.

for numero in $(seq 1 99)
do
    if [ $((numero % 2)) -ne 0 ]
    then
        echo $numero
    fi
done