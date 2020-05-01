let cql = require('node-cassandra-cql');
let client = new cql.Client({keyspace: 'CamelotStocks'});

//to copy over csv files;

'COPY stocks(name,buySummary,sellSummary) FROM '{('generator/stocks1.csv')}' DELIMITER ','';
'COPY analysts(name,year,company) FROM '{('generator/analysts1.csv')}' DELIMITER ','';
'COPY reviews(id, stockId,analystId,buy,hold,sell) FROM '{('generator/reviews.1csv')}' DELIMITER ','';