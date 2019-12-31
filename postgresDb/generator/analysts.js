const csvWriter = require('csv-write-stream');
const fs = require('fs');
var writer = csvWriter();
const faker = require('faker');
// var counter = 0;

let range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
let years = range(2019, 1995, -1);
const analystsGen = () => {
  writer.pipe(fs.createWriteStream('analysts.csv'));
  for (var i = 1; i < 1000001; i++) {
    let name = faker.name.firstName() + ' ' + faker.name.lastName();
    if (name.includes("'")) {
      name = name.replace(/'/g, '\'\'');
    };
    let year = years[Math.floor(Math.random()*years.length)];
    let company = faker.company.companyName();
    if (company.includes("'")) {
      company = company.replace(/'/g, '\'\'');
    };
    if (company.includes('and')) {
      company = company.replace(/,/g, '')
      company = company.replace(/,/g, '')
    }
    writer.write({
      name: name,
      year: year,
      company: company
    })
  }
  writer.end();
  console.log('generating analysts done');
}

analystsGen();
