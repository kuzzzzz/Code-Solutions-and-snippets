var findJudge = function (n, trust) {
  if (n === 1 && trust.length === 0) {
    return 1;
  }

  const { trusted, trustee } = trust.reduce(
    (res, [a, b]) => {
      if (!res.trustee[a]) {
        res.trustee[a] = 0;
      }

      res.trustee[a]++;

      if (!res.trusted[b]) {
        res.trusted[b] = 0;
      }

      res.trusted[b]++;

      return res;
    },
    {
      trusted: {},
      trustee: {},
    }
  );

  for (let i = 1; i <= n; i++) {
    if (!trustee[i] && trusted[i] === n - 1) {
      return i;
    }
  }

  return -1;
};
