/*The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n). */

/**
 * @param {number} n
 * @return {number}
 */
function fib(n, memo = {}) {
    if (n <= 1) return n; // Base cases

    if (memo[n]) return memo[n]; // Use cached result if available

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo); // Store result in memo
    return memo[n];
};
