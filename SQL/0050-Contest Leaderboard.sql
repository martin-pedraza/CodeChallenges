/*

You did such a great job helping Julia with her last coding contest challenge that she wants you to work on this one, too!

The total score of a hacker is the sum of their maximum scores for all of the challenges. 
Write a query to print the hacker_id, name, and total score of the hackers ordered by the descending score. 
If more than one hacker achieved the same total score, then sort the result by ascending hacker_id. 
Exclude all hackers with a total score of 0 from your result.

*/
SELECT h.hacker_id, h.name, SUM(h.max_score) AS total_score
FROM
(
    SELECT a.hacker_id, a.challenge_id, b.name, MAX(a.score) AS max_score 
    FROM Submissions a 
    INNER JOIN Hackers b
    ON a.hacker_id = b.hacker_id
    GROUP BY a.challenge_id, a.hacker_id, b.name
) h  
GROUP BY h.hacker_id, h.name 
HAVING total_score > 0 
ORDER BY total_score DESC, h.hacker_id ASC