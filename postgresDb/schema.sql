const { Pool, Client } = require('pg');
const connectionString = 'postgressql://hien@localhost:5432/stocks_db'; 
-- const pool = new Pool({
--   user: 'hien',
--   database: 'stocks_db',
--   port: '5432'
-- });

const client = new Client({
  connectionString:connectionString
});
client.connect();

clinet.query('SELCT * from data', (err, res) => {
  console.log(err, res);
  client.end();
});


-- CREATE TABLE stocks {
--   id: SERIAL PRIMARY KEY,
--   name: TEXT,
--   buySummary: VARCHAR(150),
--   sellSummary: VARCHAR(150)
-- };

-- CREATE TABLE analysts {
--   id: SERIAL PRIMARY KEY,
--   name: TEXT,
--   year: SMALLINT,
--   company: TEXT
-- };

-- CREATE TABLE reviews {
--   id: SERIAL PRIMARY KEY, 
--   stockId: INTEGER REFERENCES stocks(id),
--   analystId: INTEGER REFERENCES analysts(id),
--   buy: SMALLINT,
--   hold: SMALLINT,
--   sell: SMALLINT
-- };