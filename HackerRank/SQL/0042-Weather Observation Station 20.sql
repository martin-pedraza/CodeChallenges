/*

A median is defined as a number separating the higher half of a data set from the lower half. 
Query the median of the Northern Latitudes (LAT_N) from STATION and round your answer to 4 decimal places.
*/
SELECT ROUND(LAT_N, 4)
FROM (
    SELECT LAT_N, ROW_NUMBER() OVER() row_num
    FROM STATION
    ORDER BY LAT_N
) ORDERED
WHERE row_num = ROUND(0.5 * (SELECT COUNT(*) FROM STATION))