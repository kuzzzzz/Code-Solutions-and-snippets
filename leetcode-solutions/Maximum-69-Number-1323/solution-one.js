// My solution 

var maximum69Number = function (num) {
  num = num + "";
  num = num.split("");
  for (let x = 0; x < num.length; x++) {
    if (num[x] === "9") continue;
    if (num[x] === "6") {
      num[x] = 9;
      break;
    }
  }
  return num.join("");
};

