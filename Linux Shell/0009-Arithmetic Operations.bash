# A mathematical expression containing +,-,*,^, / and parenthesis will be provided. 
# Read in the expression, then evaluate it. Display the result rounded to 3 decimal places.

read expression
result=$(echo "scale=4; $expression" | bc)
printf "%.3f\n" "$result"
