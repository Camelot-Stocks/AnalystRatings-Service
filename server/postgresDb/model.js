const promise = require('bluebird');
const { Pool } = require('pg');

const options = {
  promiseLib: promise,
};
const pgp = require('pg-promise')(options);

const pool = new Pool({
  host: '52.53.71.156',
  database: 'postgres',
  user: 'postgres',
  port: 5432
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  client.query('SELECT NOW()', (err, result) => {
    release();
    if (err) {
      return console.error('Error executing query', err.stack);
    }
    console.log(result.rows);
  });
});

let getReviews = (callback, data) => {
  const query = `SELECT * FROM reviews WHERE stockId=${data}`;
  // let queryString = `SELECT * FROM reviews WHERE stockId=${id}`;
  pool.query(query)
    .then((res) => {
      callback(null, res);
    })
    .catch((err) => {
      callback(err);
    });
};
 let addReview = (callback, data) => {
  const query = `INSERT INTO reviews(stockId, analystId, buy, hold, sell) values(${data.stockId}, ${data.analystId}, ${data.buy}, ${data.hold}, ${data.sell})`;
  // const queryVal = [data.company, data.ticker, data.price, data.ceo, data.employees, data.founded];
  pool.none(query)
    .then(() => {
      callback(null, 'Review added to DB');
    })
    .catch((err) => callback(err));
};
let addAnalyst = (callback, data) => {
  const query = 'INSERT INTO analysts(name, year, company) values($1, $2, $3)';
  const queryVal = [data.name, data.year, data.company];
  pool.none(query, queryVal)
    .then(() => {
      callback(null, 'Analyst added to DB');
    })
    .catch((err) => callback(err));
};


module.exports = {
  getReviews,
  addReview, 
  addAnalyst
};

