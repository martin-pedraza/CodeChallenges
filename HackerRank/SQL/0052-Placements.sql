/*

Write a query to output the names of those students whose best friends got offered a higher salary than them. 
Names must be ordered by the salary amount offered to the best friends. 
It is guaranteed that no two students got same salary offer.

*/
SELECT s.Name
FROM Students AS s
INNER JOIN Friends AS f ON s.ID=f.ID
INNER JOIN Packages AS p1 ON s.ID=p1.ID
INNER JOIN Packages AS p2 ON f.Friend_ID=p2.ID
WHERE p1.Salary < p2.Salary
ORDER BY p2.Salary