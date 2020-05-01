// Index Postgres db for faster query

CREATE INDEX analysts_id ON reviews (analystId)
CREATE INDEX stocks_id ON reviews (stocktId)

// generate data
// run each of these 10 times to speed up the process. if bunch them up together to create huge csv files, not on it slow down on the csv files creation stage, it will slow down on the database seeding stage as well
node analysts.js
node reviews.js
node stocks.js

//seed db locally
node seeder.js

//getting into aws database instance
“scp -i "analalyst-ratings-service.pem" ec2-user@ec2-13-52-186-35.us-west-1.compute.amazonaws.com”

//copy file into db instance

“COPY reviews(id, stockid, analystid, buy, hold, sell) FROM '../../../../tmp/reviews1.csv' CSV;”
