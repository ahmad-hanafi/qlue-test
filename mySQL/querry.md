1) Provide a mysql select statement to return the following resultset structure:
day; num_pos_scores; num_neg_scores

Where num_pos_scores and num_neg_scores are the total number of positive score rows, and
negative score rows in the table, for individual days between March 1st, 2011 and April 30th, 2011, both
days inclusive.

SELECT date  as 'day', 
score > 0 as 'num_pos_scores', 
score < 0 as 'num_neg_scores'  
FROM assessments 
WHERE (date BETWEEN '2011-03-01' AND '2011-04-30')


2) Provide a mysql select statement that returns all the days between January 1st, 2011 and June 30th,
2011, both days inclusive, where there were no negative scores.

SELECT * FROM assessments WHERE (date BETWEEN '2011-03-01' AND '2011-04-30') AND score > 0