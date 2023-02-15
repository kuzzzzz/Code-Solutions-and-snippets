var addToArrayForm = function (num, k) {
  let v = BigInt(num.reduce((a, b, k) => a + b, "")) + BigInt(k);
  return v.toString().split("");
};
