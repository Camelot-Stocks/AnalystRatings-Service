const csvWriter = require('csv-write-stream');
const fs = require('fs');
var writer = csvWriter();
const moment = require('moment');

const reviewsGen = () => {
  writer.pipe(fs.createWriteStream('reviews.csv'));
  for (let i = 1; i < 100000001; i++) {
    if (i === 1) {
      console.log('start adding',moment().format('LTS'))
    }
    let stockId = Math.floor(Math.random() * Math.floor(100000000)) + 1;
    let analystId = Math.floor(Math.random() * Math.floor(100000000)) + 1;
    let buy = Math.floor(Math.random() * 2);
    let hold = Math.floor(Math.random() * 2);
    let sell = Math.floor(Math.random() * 2);
    writer.write({
      id: i,
      stockId: stockId,
      analystId: analystId,
      buy: buy,
      hold: hold,
      sell:sell
    })
    if (i === 1000000) {
      console.log('first Mill',moment().format('LTS'))
    }
    if (i === 50000000) {
      console.log('halfway there', moment().format('LTS'));
    }
    if (i === 100000001) {
      console.log('Creating CSV done', moment().format('LTS'))
    }
  }
  writer.end();
  console.log('generating reviews done');
}

reviewsGen();
// console.log(moment().format('LTS'));