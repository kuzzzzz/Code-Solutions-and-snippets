debugger
var findDuplicate = function (paths) {
  let contMap = new Map(),
    ans = [];
  for (let pStr of paths) {
    let i = 0,
      j,
      k;
    while (pStr.charAt(i) !== " ") i++;
    let path = pStr.slice(0, i);
    for (j = ++i; i < pStr.length; i++)
      if (pStr.charAt(i) === "(") k = i;
      else if (pStr.charAt(i) === ")") {
        let pathfile = path + "/" + pStr.slice(j, k),
          cont = pStr.slice(k + 1, i);
        if (!contMap.has(cont)) contMap.set(cont, [pathfile]);
        else contMap.get(cont).push(pathfile);
        j = i + 2;
      }
  }
  for (let v of contMap.values()) if (v.length > 1) ans.push(v);
  console.log(ans);
  return ans;
};

// Test cases
findDuplicate([
  "root/a 1.txt(abcd) 2.txt(efgh)",
  "root/c 3.txt(abcd)",
  "root/c/d 4.txt(efgh)",
  "root 4.txt(efgh)",
]);
findDuplicate([
  ("root/a 1.txt(abcd) 2.txt(efgh)",
  "root/c 3.txt(abcd)",
  "root/c/d 4.txt(efgh)"),
]);
