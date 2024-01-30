# Display the 2nd and 7th character from each line of text.

while read linea && [ "$linea" != "fin" ]
do
    if [ ${#linea} -gt 6 ]; then
        echo "$linea" | cut -c2,7
    else
        echo "${linea}" | cut -c2
    fi
done
