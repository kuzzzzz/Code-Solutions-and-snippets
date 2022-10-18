var countAndSay = function (n) {
    debugger
  let temp = "1";
  let arr = [];
  if (n === 1) return temp;
  for (let i = 2; i <= n; i++) {
    let count = 1;
    if (temp.length === 1) {
      temp += temp.length;
    } else {
      arr.splice(0);
      for (let j = 0; j < temp.length; j++) {
        if (temp[j] === temp[j + 1]) {
          count++;
        } else {
          arr.push(count, temp[j]);
          count = 1;
        }
      }
      temp = arr.join("");
    }
  }
  return temp;
};


// Test Cases
countAndSay(1)
countAndSay(4)
//This is an interesting question