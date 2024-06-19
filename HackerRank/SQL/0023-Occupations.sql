/*

Pivot the Occupation column in OCCUPATIONS so that each Name is sorted alphabetically and displayed underneath its corresponding Occupation. 
The output column headers should be Doctor, Professor, Singer, and Actor, respectively.
*/
WITH
t1 AS (
    SELECT Name, Occupation, 
        row_number() over(
            PARTITION BY Occupation ORDER BY Name
        ) AS rn
        FROM OCCUPATIONS
)
SELECT
    MAX(CASE WHEN Occupation='Doctor' THEN Name ELSE NULL END),
    MAX(CASE WHEN Occupation='Professor' THEN Name ELSE NULL END),
    MAX(CASE WHEN Occupation='Singer' THEN Name ELSE NULL END),
    MAX(CASE WHEN Occupation='Actor' THEN Name ELSE NULL END)
FROM t1
GROUP BY rn
ORDER BY rn