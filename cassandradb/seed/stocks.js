const csvWriter = require('csv-write-stream');
const fs = require('fs');
var writer = csvWriter();
const faker = require('faker');

const stocksGen = () => {
  writer.pipe(fs.createWriteStream('stocks.csv'));
  for (var i = 1; i < 1000001; i++) {
    let name = faker.company.companyName();
    if (name.includes("'")) {
      name = name.replace(/'/g, '\'\'');
    };
    if (name.includes('and')) {
      name = name.replace(/,/g, '')
      name = name.replace(/,/g, '')
    }
    let buySummary = faker.lorem.sentence();
    let sellSummary = faker.lorem.sentence();
    writer.write({
      id: i,
      name: name,
      buySummary: buySummary,
      sellSummary: sellSummary
    })
  }
  writer.end();
  console.log('generating stocks done');
}

stocksGen();
