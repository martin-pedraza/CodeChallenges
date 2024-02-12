# 
# Display the first four characters from each line of text.
# 
while read -r linea && [ "$linea" != "fin" ]
do
    echo "$linea" | cut -c1-4
done