const generateMatrix = (n) => {
  const {max, abs, floor} = Math;
  const num = (x, y) => {
    x += x - n + 1;
    y += y - n + 1;
    
    const m = max(abs(x), abs(y));
    let p = floor((x + y) / 2);
   
    if (x < y) p = 2 * m - p;
    return n * n - m * m - m + p;
  }
    
  const M = [];
  for (let y = 0; y < n; ++y) {
    M[y] = [];
    for (let x = 0; x < n; ++x)
      M[y][x] = num(x, y);
   
  }
    
  return M;
}; 