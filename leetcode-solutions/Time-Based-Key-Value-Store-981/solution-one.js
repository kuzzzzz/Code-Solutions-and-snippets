debugger
class TimeMap {
  constructor() {
    this.data = {};
  }

  set(key, value, timestamp) {
    let items = this.data[key];

    if (!items) {
      items = this.data[key] = [];
    }

    const item = { timestamp, value };
    const last = items[items.length - 1];

    if (!last || last.timestamp < timestamp) {
      items.push(item);
      return;
    }

    let left = 0;
    let right = items.length - 1;

    while (left < right) {
      const i = Math.floor((left + right + 1) / 2);

      if (items[i].timestamp > timestamp) {
        left = i + 1;
      } else {
        right = i;
      }
    }

    items.splice(left + 1, 0, item);
  }

  get(key, timestamp) {
    const items = this.data[key];

    if (!items) {
      return "";
    }
    //console.log(items)
    let left = 0;
    let right = items.length - 1;

    while (left < right) {
      const i = Math.floor((left + right + 1) / 2);

      if (items[i].timestamp > timestamp) {
        right = i - 1;
      } else {
        left = i;
      }
    }

    const item = items[left];

    if (item.timestamp > timestamp) {
      return "";
    }

    return item.value;
  }
}

// val to initialise object with 
const init = ["TimeMap", "set", "get", "get", "set", "get", "get"];

// Val to call initialised object 
const val = [
  [],
  ["foo", "bar", 1],
  ["foo", 1],
  ["foo", 3],
  ["foo", "bar2", 4],
  ["foo", 4],
  ["foo", 5],
  ["foo", 3],
];
const res = [];

// loop to call objects to store res in res
let viv = new TimeMap(val[0]);
res.push(null);

for (let x = 1; x < init.length; x++) {
  let r = init[x];
  let rr = viv[r](...val[x]);
  let fin = rr ? rr : null;
  res.push(fin);
}
console.log(res);
