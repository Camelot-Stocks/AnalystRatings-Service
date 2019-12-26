const {Pool} = require('pg');
// const {queryStr, queryAnalysts, reviewsQuery} = require('./dataGenerator.js');
const faker = require('faker');
// const connectionString = 'postgressql://hien@localhost:5432/stocks_db'; 

const pool = new Pool({
  // connectionString:connectionString
  user: 'hien',
  port: 5432,
  database: 'stocks_db'
});

// data for stocks table
let queryStr = 'INSERT INTO stocks (id, name, buysummary, sellsummary) VALUES';
for (var i = 1; i < 1000001; i++) {
  let id = i;
  let name = faker.company.companyName();
  if (name.includes("'")) {
    name = name.replace(/'/g, '\'\'');
  };
  let buySummary = faker.lorem.sentence();
  let sellSummary = faker.lorem.sentence();
  queryStr+= `(${id},'${name}', '${buySummary}', '${sellSummary}'),`
};
queryStr = queryStr.slice(0, -1) + ';';

//data for analysts table
let range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
let years = range(2019, 1995, -1);
let queryAnalysts = 'INSERT INTO analysts (id, name, year, company) VALUES';
  for (var i = 1; i < 1000001; i++) {
  let id = i;
    let name = faker.name.firstName() + ' ' + faker.name.lastName();
    if (name.includes("'")) {
      name = name.replace(/'/g, '\'\'');
    };
    let year = years[Math.floor(Math.random()*years.length)];
    let company = faker.company.companyName();
    if (company.includes("'")) {
      company = company.replace(/'/g, '\'\'');
    };
    queryAnalysts+= `(${id}, '${name}', '${year}', '${company}'),`
  };
  queryAnalysts = queryAnalysts.slice(0, -1) + ';';


  //data for reviews table
  let reviewsQuery = 'INSERT INTO reviews (id, stockId, analystId, buy, hold, sell) VALUES';
  for (var i = 1; i < 100000001; i++) {
    let id = i;
    let stockId = Math.floor(Math.random() * Math.floor(1000000)) + 1;
    let analystId = Math.floor(Math.random() * Math.floor(1000000)) + 1;
    let buy = Math.floor(Math.random() * 2);
    let hold = Math.floor(Math.random() * 2);
    let sell = Math.floor(Math.random() * 2);
    reviewsQuery += `(${id}, '${stockId}', '${analystId}', '${buy}', '${hold}', '${sell}'),`;
  };
  reviewsQuery = reviewsQuery.slice(0, -1) + ';';

let seedStocks = () => {
  pool.query(queryStr, (err, res) => {
    if (err) {
      console.log(err)
    }
  })
};

let seedAnalysts = () => {
  pool.query(queryAnalysts, (err, res) => {
    if (err) {
      console.log(err)
    }
  })
};

let seedReviews = () => {
  pool.query(reviewsQuery, (err, data) => {
    if (err) {
      console.log(err)
    }
  })
}

pool.connect()
  .then(() => console.log('connected successfully'))
  .then(() => seedStocks())
  .then(() => console.log('Seed stocks successful!'))
  .then(() => seedAnalysts())
  .then(() => console.log('Seed analysts successfully!'))
  .then(() => seedReviews())
  .then(() => console.log('Seed reviews successfully!'))
  .catch(e => console.log(e))
  .then(() => pool.end())
