debugger;
var topKFrequent = function (words, k) {
  let r = {};
  for (let v of words) {
    r[v] ? (r[v] = r[v] + 1) : (r[v] = 1);
  }

  let j = Object.entries(r)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, k)
    .map((e) => e[0]);

  return j;
};

// Test Cases
topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2);

topKFrequent(
  ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
  4
);
