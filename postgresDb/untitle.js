let faker = require('faker');
let arr = [];
let moment = require('moment');
for (var i = 0; i< 100; i++) {
  let first = faker.name.firstName() + ' ' + faker.name.lastName();
  arr.push(first);
}

let date = faker.date.past();

// console.log(date.slice(0, 9));

// console.log(typeof(date.date));

// let year = moment().format('Y');
// let years = moment.years();

// const currentYear =  Date().getFullYear();
// console.log(currentYear);

const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
let years =range(2019, 1995, -1);
let year = years[Math.floor(Math.random()*years.length)];
// console.log(year); 

var random = Math.floor(Math.random() * Math.floor(1000000)) + 1;
// var num = Math.floor(Math.random() * (1000000 - 1 + 1)) + 1;

console.log(random);