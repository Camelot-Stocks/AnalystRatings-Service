CREATE keyspace CamelotStocks 
  with replication = {
    'class': 'SimpleStrategy',
    'replication_factor': 2
  };

USE CamelotStocks;
CREATE TABLE stocks (
  id int PRIMARY KEY,
  name text,
  buySummary text,
  sellSummary text,
  PRIMARY KEY (name, id)
);

CREATE TABLE analysts (
  id int PRIMARY KEY,
  name text,
  year int,
  company text
);

CREATE TABLE reviews (
  id int PRIMARY KEY, 
  stockId int,
  analystId int,
  buy int,
  hold int,
  sell int
);
