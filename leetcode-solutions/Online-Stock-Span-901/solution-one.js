debugger
var StockSpanner = function (prices) {
  this.prices = [];
};


StockSpanner.prototype.next = function (price) {
  let c = 1;
  while (
    this.prices.length > 0 &&
    price >= this.prices[this.prices.length - 1][0]
  ) {
    //go left in our condensed array
    c += this.prices[this.prices.length - 1][1]; //add the grouped counts of smaller elements
    this.prices.pop(); // get rid of < values now that we've got their count, elim unnecessary data
  }
  this.prices.push([price, c]); //add grouped element to our condensed array
  return c; //return last count for # days <= current
};


const init = [
  "StockSpanner",
  "next",
  "next",
  "next",
  "next",
  "next",
  "next",
  "next",
];

// Val to call initialised object
const val = [[], [100], [80], [60], [70], [60], [75], [85]];
const res = [];

// loop to call objects to store res in res
let viv = new StockSpanner(val[0]);
res.push(null);

for (let x = 1; x < init.length; x++) {
  let r = init[x];
  let rr = viv[r](...val[x]);
  let fin = rr ? rr : null;
  res.push(fin);
}
console.log(res);
