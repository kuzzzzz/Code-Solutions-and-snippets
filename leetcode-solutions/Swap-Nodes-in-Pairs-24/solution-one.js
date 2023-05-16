var swapPairs = function (head) {
  let cur = head;
  let prev = null;
  let n = null;
  let cnt = 0;
  while (cur != null && cnt < 2) {
    n = cur.next;
    cur.next = prev;
    prev = cur;
    cur = n;
    cnt++;
  }
  if (n != null) {
    head.next = swapPairs(n);
  }
  return prev;
};
