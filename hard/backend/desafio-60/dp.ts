// Fibonacci sem DP — O(2^n)
export function fib(n: number): number {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

// Contagem de caminhos em grid sem DP — O(2^(m+n))
export function countPaths(m: number, n: number): number {
  if (m === 1 || n === 1) return 1;
  return countPaths(m - 1, n) + countPaths(m, n - 1);
}

// Longest Common Subsequence sem DP — O(2^(m+n))
export function lcs(s1: string, s2: string): number {
  if (s1.length === 0 || s2.length === 0) return 0;
  if (s1[0] === s2[0]) return 1 + lcs(s1.slice(1), s2.slice(1));
  return Math.max(lcs(s1.slice(1), s2), lcs(s1, s2.slice(1)));
}
