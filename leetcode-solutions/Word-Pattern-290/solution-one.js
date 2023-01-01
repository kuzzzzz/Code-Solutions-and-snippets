var wordPattern = function (pattern, s) {
  const hash = {};
  const words = s.split(" ");
  const seen = new Set();
  if (pattern.length !== words.length) return false;
  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];

    if (hash[char] && hash[char] !== words[i]) return false;
    if (!hash[char] && seen.has(words[i])) return false;

    hash[char] = words[i];
    seen.add(words[i]);
  }
  return true;
};
