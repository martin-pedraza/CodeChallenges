/*

Julia asked her students to create some coding challenges. Write a query to print the hacker_id, name, and the total number of challenges created by each student. 
Sort your results by the total number of challenges in descending order. 
If more than one student created the same number of challenges, then sort the result by hacker_id. 
If more than one student created the same number of challenges and the count is less than the maximum number of challenges created, then exclude those students from the result.
*/
 WITH solved_challengestable AS
 (
     SELECT h.hacker_id, h.name, COUNT(*) AS challenges_solved
     FROM Hackers h
     INNER JOIN Challenges c 
     ON h.hacker_id = c.hacker_id
     GROUP BY h.hacker_id, h.name
 )
 
SELECT hacker_id, name, challenges_solved
FROM solved_challengestable
WHERE challenges_solved = (SELECT MAX(challenges_solved) FROM solved_challengestable)
    OR challenges_solved IN (
        SELECT challenges_solved 
        FROM solved_challengestable
        GROUP BY challenges_solved
        HAVING COUNT(challenges_solved) = 1)
ORDER BY challenges_solved DESC, hacker_id;