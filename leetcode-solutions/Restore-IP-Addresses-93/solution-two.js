//ChatGpt Coded this solution and It was super brilliant. 
debugger
function restoreIpAddresses(s) {
  let res = [];
  function backtrack(s, start, path) {
    if (path.length === 4) {
      if (start === s.length) {
        res.push(path.join("."));
      }
      return;
    }
    for (let i = start; i < s.length && i < start + 3; i++) {
      let segment = s.substring(start, i + 1);
      if (segment > 255 || (segment.length > 1 && segment[0] === "0")) continue;
      path.push(segment);
      backtrack(s, i + 1, path);
      path.pop();
    }
  }
  backtrack(s, 0, []);
  return res;

}



let res1 = restoreIpAddresses("123979230230");
let res2 = restoreIpAddresses("1223023023");
let res3 = restoreIpAddresses("1&993");

console.log(res1, res2, res3);