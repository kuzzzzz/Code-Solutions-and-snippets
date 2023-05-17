var pairSum = function (head) {
  let stack = [];

  while (head) {
    stack.push(head.val);
    head = head.next;
  }

  let n = stack.length;
  let max = 0;

  for (let i = 0; i < n; i++) {
    max = Math.max(max, stack[i] + stack[n - 1 - i]);
  }
  return max;
};
