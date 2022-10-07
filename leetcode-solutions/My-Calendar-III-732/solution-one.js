debugger;
var MyCalendarThree = function () {
  this.tm = {};
};

MyCalendarThree.prototype.book = function (start, end) {
  this.tm[start] = (this.tm[start] || 0) + 1;
  this.tm[end] = (this.tm[end] || 0) - 1;
  let max = (count = 0);
  for (let val in this.tm) {
    max = Math.max(max, (count += this.tm[val]));
  }
  return max;
};

const init = [
  "MyCalendarThree",
  "book",
  "book",
  "book",
  "book",
  "book",
  "book",
];

// Val to call initialised object
const val = [[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]];
const res = [];

// loop to call objects to store res in res
let viv = new MyCalendarThree(val[0]);
res.push(null);

for (let x = 1; x < init.length; x++) {
  let r = init[x];
  let rr = viv[r](...val[x]);
  let fin = rr ? rr : null;
  res.push(fin);
}

console.log(res);
