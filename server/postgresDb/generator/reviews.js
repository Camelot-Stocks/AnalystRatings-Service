const csvWriter = require('csv-write-stream');
const fs = require('fs');
var writer = csvWriter();
var counter = 0;

const reviewsGen = () => {
  writer.pipe(fs.createWriteStream('reviews8.csv'));
  for (var i = 70000001; i < 80000001; i++) {
    let stockId = Math.floor(Math.random() * Math.floor(1000000)) + 1;
    let analystId = Math.floor(Math.random() * Math.floor(1000000)) + 1;
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
  }
  writer.end();
  console.log('generating reviews done');
}

reviewsGen();