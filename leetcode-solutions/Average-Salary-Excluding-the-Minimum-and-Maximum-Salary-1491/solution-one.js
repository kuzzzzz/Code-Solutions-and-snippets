var average = function (salary) {
  let min = Math.min(...salary);
  let max = Math.max(...salary);

  salary.splice(salary.indexOf(min), 1);
  salary.splice(salary.indexOf(max), 1);

  return salary.reduce((a, b) => a + b) / salary.length;
};
