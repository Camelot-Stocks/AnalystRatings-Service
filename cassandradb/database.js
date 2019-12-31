let cql = require('node-cassandra-cql');
let client = new cql.Client({keyspace: 'CamelotStocks'});


// const cassandra = require('cassandra-driver');

// const client = new cassandra.Client({keyspace:'CamelotStocks'});


// 'COPY CamelotStocks.analysts (id, name, year, company) FROM ‘./seed/analysts.csv’ with header=true and delimiter =’,’;'