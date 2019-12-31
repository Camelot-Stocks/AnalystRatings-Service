DROP KEYSPACE IF EXISTS CamelotStocks;

CREATE KEYSPACE CamelotStocks 
  WITH REPLICATION = {
    'class': 'SimpleStrategy',
    'replication_factor': 2
  };

USE CamelotStocks;

CREATE TABLE "stocks" (
  id int,
  name text,
  buySummary text,
  sellSummary text,
  PRIMARY KEY (name, id)
);

CREATE TABLE "analysts" (
  id int,
  name text,
  year int,
  company text,
  PRIMARY KEY (name, id)
);

CREATE TABLE "reviews" (
  id int, 
  stockId int,
  analystId int,
  buy int,
  hold int,
  sell int,
  PRIMARY KEY (id)
);


