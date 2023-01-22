debugger

var restoreIpAddresses = function (s) {
  if (s.length < 4 || s.length > 12) return [];
  const res = [];
  backtrack(res, s);
  return res;
};

function backtrack(res, s, curr = [], i = 0) {
  if (curr.length === 4) {
    res.push(curr.join("."));
    return;
  }
  const charsLeft = s.length - i;
  const groupsLeft = 4 - curr.length;
  const minLen = groupsLeft === 1 ? charsLeft - groupsLeft + 1 : 1;
  const maxLen = s[i] === "0" ? 1 : Math.min(3, charsLeft - groupsLeft + 1);
  for (let len = minLen; len <= maxLen; len++) {
    let num = s.substr(i, len);
    if (num > 255) continue;
    curr.push(num);
    backtrack(res, s, curr, i + len);
    curr.pop();
  }
}

let res1 = restoreIpAddresses('123979230230')
let res2 = restoreIpAddresses('1223023023')
let res3 = restoreIpAddresses('1&993')

console.log(res1,res2,res3)