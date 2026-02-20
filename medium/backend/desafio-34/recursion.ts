// Recursão com caso base obscuro e sem proteção contra stack overflow
export function flattenDeep(arr: any[]): any[] {
  let result: any[] = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenDeep(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

// Fibonacci recursivo sem memoização — O(2^n)
export function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Soma de árvore sem caso base explícito para null
type TreeNode = { value: number; children?: TreeNode[] };

export function sumTree(node: TreeNode): number {
  let sum = node.value;
  if (node.children) {
    for (const child of node.children) {
      sum += sumTree(child);
    }
  }
  return sum;
}
