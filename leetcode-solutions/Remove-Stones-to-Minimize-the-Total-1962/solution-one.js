debugger;
var minStoneSum = function (piles, k) {
  piles.sort((a, b) => a - b);
  const rest = [];
  for (let i = 0; i < k; i++) {
    let pile;
    if (!rest.length || rest[0] < piles[piles.length - 1]) {
      pile = piles.pop();
    } else {
      pile = rest.shift();
    }

    pile -= Math.floor(pile / 2);
    rest.push(pile);
  }
  let sum = 0;
  for (let i = 0; i < piles.length; i++) {
    sum += piles[i];
  }
  for (let i = 0; i < rest.length; i++) {
    sum += rest[i];
  }
  return sum;
};

let test1 = minStoneSum([5, 4, 9],2);
console.log(test1);
