// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Grider's implementation (iterative)
function fibLinear(n) {
   const result = [0, 1];

   for (let i = 2; i <= n; i++) {
      const a = result[i - 1];
      const b = result[i - 2];

      result.push(a + b);
   }

   return result[n];
}

/*
 * A way to think about this, simplified, in language, without a visual recursion tree...
 * 
 * Difficult. Well, consider the first part. if (n < 2) return n; is the base case, which prevents
 * the function from making further recursive calls. It is a must to avoid infinite recursion.
 * 
 * return fib(n - 1) + fib(n - 2) will make a recursion tree if n >= 2. The tree itself is a tree of 
 * functions that are all added together once they meet the base case.
 * 
 * What happens when we get to the base case? This is where real values are returned and then added 
 * together. No longer is the function being returned by itself, but rather the function is returning
 * n at the stage where n < 2. When these values are returned, they are added together, as each
 * recursive call of each given function creates a new instance of functional addition.
 * 
 * Simple examples:
 * 
 * Let n be equal to three (3).
 * 
 * fib(3)
 *    --> fib(2) + fib(1)
 *    --> (fib(1) + fib(0)) + 1
 *    --> (1 + 0) + 1
 *    --> 2
 *
 * Let n be equal to four (4):
 * 
 * fib(4)
 *    --> fib(3) + fib(2)
 *    --> (fib(2) + fib(1)) + (fib(1) + fib(0))
 *    --> ( (fib(1) + fib(0)) + 1 ) + ( 1 + 0 )
 *    --> ( (1 + 0) + 1 ) + ( 1 )
 *    --> ( 1 + 1 ) + 1
 *    --> 3
 */

// Grider's implementation (improve performance of function)
function memoize(fn) {
   const cache = {};

   return function(...args) {
      if (cache[args]) {
         return cache[args];
      }

      const result = fn.apply(this, args);
      cache[args] = result;
   
      return result;
   }
};

// Grider's implementation / classic example (recursive)
function fib(n) {
   if (n < 2) {
      return n;
   }

   return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;
