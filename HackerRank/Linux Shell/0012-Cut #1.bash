# Given N lines of input, print the 3rd character from each line as a new line of output. 
# It is guaranteed that each of the n lines of input will have a 3rd character.

while read linea
do
    echo "${linea}" | cut -c3
done