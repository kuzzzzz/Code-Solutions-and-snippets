debugger
var equationsPossible = function (equations) {
  const parent = Array(26);

  for (let i = 0; i < 26; i++) parent[i] = i;

  function find(x) {
    if (parent[x] != x) parent[x] = find(parent[x]);

    return parent[x];
  }

  for (const eq of equations) {
    if (eq[1] === "=") {
      const p1 = find(eq[0].charCodeAt(0) - "a".charCodeAt(0));
      const p2 = find(eq[3].charCodeAt(0) - "a".charCodeAt(0));

      parent[p2] = p1;
    }
  }

  for (const eq of equations) {
    if (eq[1] === "!") {
      const p1 = find(eq[0].charCodeAt(0) - "a".charCodeAt(0));
      const p2 = find(eq[3].charCodeAt(0) - "a".charCodeAt(0));

      if (p1 === p2) return false;
    }
  }

  return true;
};

// Test-case

equationsPossible(["b==a", "a==b"]);
equationsPossible(["a==b", "b!=a"]);
