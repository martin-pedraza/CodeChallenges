/*

Harry Potter and his friends are at Ollivander's with Ron, finally replacing Charlie's old broken wand.

Hermione decides the best way to choose is by determining the minimum number of gold galleons needed to buy each non-evil wand of high power and age. 
Write a query to print the id, age, coins_needed, and power of the wands that Ron's interested in, sorted in order of descending power. 
If more than one wand has same power, sort the result in order of descending age.
*/
SELECT id, age, coins_needed, power
FROM Wands
INNER JOIN Wands_Property
ON Wands.code = Wands_Property.code
WHERE is_evil = 0 AND coins_needed IN (
    SELECT MIN(w.coins_needed)
    FROM Wands AS w
    INNER JOIN Wands_Property AS wp
    ON w.code = wp.code
    WHERE Wands_Property.age = wp.age AND Wands.power = w.power
)
ORDER BY power DESC, age DESC