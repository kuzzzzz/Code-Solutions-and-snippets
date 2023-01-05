var findMinArrowShots = function (points) {
  if (points.length === 1) return 1;

  let res = points.length;

  points.sort((a, b) => a[0] - b[0] || a[1] - a[0] - (b[1] - b[0]));

  for (let i = 1; i < points.length; i++) {
    if (points[i - 1][0] <= points[i][0] && points[i][0] <= points[i - 1][1]) {
      res--;
      [points[i][0], points[i][1]] = [
        Math.max(points[i - 1][0], points[i][0]),
        Math.min(points[i - 1][1], points[i][1]),
      ];
    }
  }

  return res;
};
