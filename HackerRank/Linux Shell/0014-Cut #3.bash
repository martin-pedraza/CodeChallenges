# 
# Display a range of characters starting at the 2nd position of a string and ending at the 7th position (both positions included).

while read linea
do
    if [ ${#linea} -gt 6 ]; then
        echo "$linea" | cut -c2-7
    else
        echo "${linea}" | cut -c2-
    fi
done
