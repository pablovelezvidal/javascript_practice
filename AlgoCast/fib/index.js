// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// var fib_memo = [];

// function fib(n) {
//   if (fib_memo[n]) return fib_memo[n];
//   if (n === 1) return 1;
//   if (n === 2) return 1;

//   let value = fib(n - 1) + fib(n - 2);
//   fib_memo[n] = value;
//   return value;
// }

function fib(n) {
  result = [0, 1];
  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];
    result.push(a + b);
  }
  return result[n];
}

module.exports = fib;
