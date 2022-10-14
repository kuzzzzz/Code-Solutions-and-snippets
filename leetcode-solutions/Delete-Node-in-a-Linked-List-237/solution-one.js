debugger;
const { createList } = require("../util/createList");

var deleteNode = function (node) {
  // Since we know input node is not last node, so nextNode will not be null
  nextNode = node.next;
  // Step 2
  node.val = nextNode.val;
  // Step 3
  node.next = nextNode.next;
  nextNode.next = null;
  delete nextNode;
};
let arr = [4, 5, 1, 9];

let head = createList(arr, arr.length);
console.log(head);
let ptr = head;
while (ptr.next != null) {
  if (ptr.val == 5) {
    break;
  }
  ptr = ptr.next;
}
console.log(ptr);
deleteNode(ptr);
console.log(head);
