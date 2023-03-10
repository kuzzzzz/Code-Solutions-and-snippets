var Solution = function (head) {
  arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
};

Solution.prototype.getRandom = function () {
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};
