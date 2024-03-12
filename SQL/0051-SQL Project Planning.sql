/*

Write a query to output the start and end dates of projects listed by the number of days it took to complete the project in ascending order. 
If there is more than one project that have the same number of completion days, then order by the start date of the project.

*/
SELECT
    MIN(Start_Date) AS start_date,
    MAX(Start_Date) + INTERVAL 1 DAY  AS end_date
FROM (
    SELECT
        Start_Date,
        SUM(is_gap) OVER (ORDER BY Start_Date) AS grp
    FROM (
        SELECT
            Start_Date,
            CASE WHEN LAG(Start_Date) OVER (ORDER BY Start_Date) = DATE_SUB(Start_Date, INTERVAL 1 DAY)
                 THEN 0 ELSE 1 END AS is_gap
        FROM
            Projects
    ) AS gap_table
) AS grp_table
GROUP BY grp
ORDER BY COUNT(*);