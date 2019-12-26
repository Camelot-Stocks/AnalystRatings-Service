const {Pool} = require('pg');
const {queryStr, queryAnalysts, reviewsQuery} = require('./dataGenerator.js');
// const connectionString = 'postgressql://hien@localhost:5432/stocks_db'; 

const pool = new Pool({
  // connectionString:connectionString
  user: 'hien',
  port: 5432,
  database: 'stocks_db'
});

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
  // .then(() => seedAnalysts())
  // .then(() => console.log('Seed analysts successfully!'))
  // .then(() => seedReviews())
  // .then(() => console.log('Seed reviews successfully!'))
  .catch(e => console.log(e))
  .then(() => pool.end())
