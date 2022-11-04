//This is my own solution for this problem, I know code is disgustiong
var reverseVowels = function (s) {
  let v = "aeiouAEIOU";
  let r = [];
  let numr = [];
  let rr = s.split("");

  for (let x = 0; x < s.length; x++) {
    if (v.indexOf(s[x]) >= 0) {
      r.push([s[x], x]);
    }
  }

  for (let [d, v] of r) {
    numr.unshift(v);
  }

  for (let c = 0; c < numr.length; c++) {
    rr[numr[c]] = r[c][0];
  }

  return rr.join("");
};