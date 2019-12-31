const csvWriter = require('csv-write-stream');
const fs = require('fs');
var writer = csvWriter();
const faker = require('faker');
var counter = 0;

const stocksGen = () => {
  writer.pipe(fs.createWriteStream('stocks.csv'));
  for (var i = 1; i < 100; i++) {
    let name = faker.company.companyName();
    if (name.includes("'")) {
      name = name.replace(/'/g, '\'\'');
    };
    let buySummary = faker.lorem.sentence();
    let sellSummary = faker.lorem.sentence();
    writer.write({
      id: counter++,
      name: name,
      buySummary: buySummary,
      sellSummary: sellSummary
    })
  }
  writer.end();
  console.log('generating done');
}

stocksGen();
