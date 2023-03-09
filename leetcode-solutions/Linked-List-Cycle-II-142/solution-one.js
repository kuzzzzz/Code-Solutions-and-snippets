var detectCycle = function (head) {
  if (!head || head.next === null) return null;
  let r = new Set();

  while (head) {
    r.add(head);
    head = head.next;
    if (r.has(head)) {
      return head;
    }
  }
  return null;
};
