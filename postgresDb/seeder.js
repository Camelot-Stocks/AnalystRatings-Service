//test script and connection to the database

const {Pool} = require('pg');
// const connectionString = 'postgressql://hien@localhost:5432/stocks_db'; 

const pool = new Pool({
  // connectionString:connectionString
  user: 'hien',
  port: 5432,
  database: 'stocks_db'
});

pool.connect()
  .then(() => console.log('connected successfully'))
  .then(() => seed())
  .then(results => console.table(results.rows))
  .catch(e => console.log(e))
  // .finally(() => client.end());
  .then(() => pool.end());
  
let seed = () => {
  queryStr = "INSERT INTO data (str_col, int_col) VALUES ('nadam',4)"
  for (var i = 0; i < 100; i++) {
    pool.query(queryStr, (err, res) => {
      if (err) {
        console.log(err)
      }
    })
  }
}
 // let query = "INSERT INTO data (id, str_col, int_col) VALUES (3, 'me', 3)";
// client.query(query, (err, res) => {
//   console.log(err, res);

// });
// client.query('SELECT * from data', (err, res) => {
//   console.log(err, res);
//   // client.end();
// });
// client.end();