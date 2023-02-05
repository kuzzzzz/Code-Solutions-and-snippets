var findAnagrams = function (s, p) {
  if (p.length > s.length) return [];

  let visited = {},
    left = 0,
    res = [],
    matched = 0;

  for (let x of p) visited[x] = visited[x] + 1 || 1;

  for (let right in s) {
    if (s[right] in visited) {
      visited[s[right]] -= 1;
      if (visited[s[right]] === 0) matched++;
    }
    if (Object.keys(visited).length === matched) res.push(left);

    if (right >= p.length - 1) {
      let leftChar = s[left];
      left++;
      if (leftChar in visited) {
        if (visited[leftChar] === 0) matched -= 1;
        visited[leftChar] += 1;
      }
    }

    console.log(matched, visited, left);
  }
  return res;
};
