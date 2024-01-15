# Given n integers, compute their average, rounded to three decimal places.

read N
acum=0
for ((i=0; i<$N; i++))
do
    read numero
    acum=$((acum + numero))
done
result=$(echo "scale=4; $acum / $N" | bc)
printf "%.3f" "$result"
