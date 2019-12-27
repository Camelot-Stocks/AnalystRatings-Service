const faker = require('faker');


//create string for stocks table
let queryStr = 'INSERT INTO stocks (name, buysummary, sellsummary) VALUES';
for (var i = 0; i < 1000000; i++) {
  let name = faker.company.companyName();
  if (name.includes("'")) {
    name = name.replace(/'/g, '\'\'');
  };
  let buySummary = faker.lorem.sentence();
  let sellSummary = faker.lorem.sentence();
  queryStr+= `('${name}', '${buySummary}', '${sellSummary}'),`
};
queryStr = queryStr.slice(0, -1) + ';';
  
//create string for analyst table
let range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
let years = range(2019, 1995, -1);
let queryAnalysts = 'INSERT INTO analysts (name, year, company) VALUES';
  for (var i = 0; i < 1000000; i++) {
    let name = faker.name.firstName() + ' ' + faker.name.lastName();
    if (name.includes("'")) {
      name = name.replace(/'/g, '\'\'');
    };
    let year = years[Math.floor(Math.random()*years.length)];
    let company = faker.company.companyName();
    if (company.includes("'")) {
      company = company.replace(/'/g, '\'\'');
    };
    queryAnalysts+= `('${name}', '${year}', '${company}'),`
  };
  queryAnalysts = queryAnalysts.slice(0, -1) + ';';
    
//create string for reviews table
let reviewsQuery = 'INSERT INTO reviews (stockId, analystId, buy, hold, sell) VALUES';
for (var i = 0; i < 100000000; i++) {
  let stockId = Math.floor(Math.random() * Math.floor(1000000)) + 1;
  let analystId = Math.floor(Math.random() * Math.floor(1000000)) + 1;
  let buy = Math.floor(Math.random() * 2);
  let hold = Math.floor(Math.random() * 2);
  let sell = Math.floor(Math.random() * 2);
  reviewsQuery += `('${stockId}', '${analystId}', '${buy}', '${hold}', '${sell}'),`;
};
reviewsQuery = reviewsQuery.slice(0, -1) + ';';

module.exports = {
  queryStr: queryStr,
  queryAnalysts: queryAnalysts,
  reviewsQuery: reviewsQuery
}