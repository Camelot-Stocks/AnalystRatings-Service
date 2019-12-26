
DROP TABLE IF EXISTS stocks, analysts, reviews;
 CREATE TABLE stocks (
  id INTEGER PRIMARY KEY,
  name TEXT,
  buySummary VARCHAR(150),
  sellSummary VARCHAR(150)
 );

CREATE TABLE analysts (
  id INTEGER PRIMARY KEY,
  name TEXT,
  year SMALLINT,
  company TEXT
);

CREATE TABLE reviews (
  id INTEGER PRIMARY KEY, 
  stockId INTEGER,
  analystId INTEGER,
  buy SMALLINT,
  hold SMALLINT,
  sell SMALLINT
);


-- CREATE TABLE reviews (
--   id SERIAL PRIMARY KEY, 
--   stockId INTEGER REFERENCES stocks(id),
--   analystId INTEGER REFERENCES analysts(id),
--   buy SMALLINT,
--   hold SMALLINT,
--   sell SMALLINT
-- );

-- CREATE TABLE item (
--   id SERIAL PRIMARY KEY,
--   name TEXT,
--   buySummary VARCHAR(150),
--   sellSummary VARCHAR(150)
--  );
