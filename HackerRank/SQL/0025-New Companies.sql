/*

Amber's conglomerate corporation just acquired some new companies. Each of the companies follows this hierarchy:
founder -> Lead Manager -> Senior Manager -> Manager -> Employee
Given the table schemas below, write a query to print the company_code, founder name, total number of lead managers, total number of senior managers, total number of managers, and total number of employees. 
Order your output by ascending company_code.
*/
SELECT e.company_code, c.founder, COUNT(DISTINCT e.lead_manager_code), COUNT(DISTINCT e.senior_manager_code), COUNT(DISTINCT e.manager_code), COUNT(DISTINCT e.employee_code) 
FROM Employee e 
INNER JOIN Company c
ON e.company_code = c.company_code
GROUP BY e.company_code, c.founder
ORDER BY e.company_code