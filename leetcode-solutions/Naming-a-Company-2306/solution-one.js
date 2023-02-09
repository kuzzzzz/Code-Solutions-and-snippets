var distinctNames = function (ideas) {
  let map = new Map(),
    result = 0,
    keys = [];
  for (let idea of ideas) {
    let firstCharIndex = idea.charCodeAt(0) - "a".charCodeAt(0);
    map.set(
      firstCharIndex,
      (map.get(firstCharIndex) || (keys.push(firstCharIndex) && new Set())).add(
        idea.substr(1)
      )
    );
  }
  for (let i = 0; i < keys.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      let setA = map.get(keys[i]);
      let setB = map.get(keys[j]);
      const common = new Set([...setA].filter((element) => setB.has(element)));
      result += (setA.size - common.size) * (setB.size - common.size);
    }
  }
  return 2 * result; //order is imp, "doffee conuts" and "conuts doffee" are different
};
