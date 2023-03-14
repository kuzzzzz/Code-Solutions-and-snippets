var sumNumbers = function (root) {
  if (root === null) return 0;

  var sum = 0;

  sumn(root, 0, function (x) {
    sum += x;
  });

  return sum;
};

function sumn(r, n, f) {
  var s = n * 10 + r.val;

  if (r.left === null && r.right === null) {
    f(s);
    return;
  }

  if (r.left !== null) {
    sumn(r.left, s, f);
  }
  if (r.right !== null) {
    sumn(r.right, s, f);
  }
}
