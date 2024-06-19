/*

You are given a table, Functions, containing two columns: X and Y.
Two pairs (X1, Y1) and (X2, Y2) are said to be symmetric pairs if X1 = Y2 and X2 = Y1.
Write a query to output all such symmetric pairs in ascending order by the value of X. 
List the rows such that X1 ≤ Y1.

*/
SELECT f1.x,f1.y FROM Functions AS f1 
INNER JOIN Functions AS f2 
ON f1.x = f2.y AND f2.x = f1.y
WHERE f1.x <= f1.y 
GROUP BY f1.x,f1.y 
HAVING f1.x <> f1.y OR COUNT(*) > 1
ORDER BY f1.x ASC;