var removeNthFromEnd = function (head, n) {
  let size = 1;

  let currentNode = head,
    p = head;
  while (currentNode.next) {
    size += 1;
    currentNode = currentNode.next;
    if (size > n + 1) {
      p = p.next;
    }
  }

  if (size == n) return head.next;
  p.next = p.next.next;

  return head;
};
