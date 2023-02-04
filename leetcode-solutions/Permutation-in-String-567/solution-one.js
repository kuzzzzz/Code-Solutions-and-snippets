var checkInclusion = function (s1, s2) {
  let visited = {},
    left = 0,
    matched = 0;

  for (let s in s1) visited[s1[s]] = visited[s1[s]] + 1 || 1;

  for (let right in s2) {
    if (s2[right] in visited) {
      visited[s2[right]] -= 1;
      if (visited[s2[right]] === 0) matched++;
    }

    if (matched === Object.keys(visited).length) return true;

    if (right >= s1.length - 1) {
      let leftChar = s2[left];

      left += 1;
      if (leftChar in visited) {
        console.log(leftChar);
        if (visited[leftChar] === 0) {
          matched -= 1;
        }
        visited[leftChar] += 1;
      }
    }
  }

  return false;
};
