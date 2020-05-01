const {Pool} = require('pg');
const faker = require('faker');
const path = require('path');
const connectionString = 'postgressql://hien@localhost:5432/stocks_db'; 

const pool = new Pool({
  connectionString:connectionString,
  user: 'hien',
  port: 5432,
  database: 'stocks_db'
});

let seedStocks = () => {
  pool.query(`COPY stocks(name,buySummary,sellSummary) FROM '${path.resolve('generator/stocks.csv')}' DELIMITER ',';`, (err, res) => {
    if (err) {
      console.log(err)
    }
  })
};
// `COPY analysts(id,name,year,company) FROM '${path.resolve('generator/analysts.csv')}' DELIMETER ',';`
// let seedAnalysts = () => {
//   pool.query(`COPY analysts(name,year,company) FROM '${path.resolve('generator/analysts.csv')}' DELIMITER ',';`, (err, res) => {
//     if (err) {
//       console.log(err)
//     }
//   })
// };

// let seedReviews = () => {
//   for (var i = 1; i < 11; i++) {
//     pool.query(`COPY reviews(id, stockId,analystId,buy,hold,sell) FROM '${path.resolve(`generator/reviews${i}.csv`)}' DELIMITER ',';`, (err, data) => {
//       if (err) {
//         console.log(err)
//       }
//     })
//   }
// }


pool.connect()
  .then(() => console.log('connected successfully'))
  .then(() => seedStocks())
  .then(() => console.log('Seed stocks successful!'))
  // .then(() => seedAnalysts())
  // .then(() => console.log('Seed analysts successfully!'))
  // .then(() => seedReviews())
  // .then(() => console.log('Seed reviews successfully!'))
  // .catch(e => console.log(e))
  .then(() => pool.end())

  module.exports = pool;