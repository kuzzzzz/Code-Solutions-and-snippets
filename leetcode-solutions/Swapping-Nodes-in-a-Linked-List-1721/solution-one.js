var swapNodes = function (head, k) {
  let count = 1;
  let left = head,
    right = head,
    curr = head;

  while (curr) {
    if (count < k) {
      left = left.next;
    }
    if (count > k) {
      right = right.next;
    }
    count++;
    curr = curr.next;
  }
  let val = left.val;
  left.val = right.val;
  right.val = val;
  return head;
};
