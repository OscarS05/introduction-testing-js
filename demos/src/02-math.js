function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (a === 0 || b === 0) return null;
  return a / b;
}

function average(a, b) {
  return (a + b) / 2;
}

module.exports = {
  sum,
  multiply,
  divide,
  average,
};
