/*

Julia just finished conducting a coding contest, and she needs your help assembling the leaderboard! 
Write a query to print the respective hacker_id and name of hackers who achieved full scores for more than one challenge. 
Order your output in descending order by the total number of challenges in which the hacker earned a full score. 
If more than one hacker received full scores in same number of challenges, then sort them by ascending hacker_id.
*/
SELECT T.HACKER_ID,T.NAME
    FROM
    (select h.hacker_id, h.name,s.challenge_id, s.score,c.difficulty_level,d.score as max_score from hackers h
    join Submissions s  on s.hacker_id = h.hacker_id
    join challenges c   on s.challenge_id = c.challenge_id
    join Difficulty d   on d.difficulty_level = c.difficulty_level) AS T
WHERE T.SCORE = T.MAX_SCORE
GROUP BY hacker_id,T.NAME 
HAVING COUNT(T.hacker_id) > 1
ORDER BY COUNT(T.hacker_id) DESC,T.HACKER_ID