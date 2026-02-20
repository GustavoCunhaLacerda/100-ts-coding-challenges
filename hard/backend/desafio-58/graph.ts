// Grafo representado como lista de adjacência
type Graph = Map<string, string[]>;

// Busca ingênua sem BFS — não garante caminho mais curto
export function findPath(graph: Graph, start: string, end: string): string[] | null {
  function dfs(current: string, visited: Set<string>, path: string[]): string[] | null {
    if (current === end) return [...path, current];
    visited.add(current);
    const neighbors = graph.get(current) ?? [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        const result = dfs(neighbor, visited, [...path, current]);
        if (result) return result;
      }
    }
    return null;
  }
  return dfs(start, new Set(), []);
}

// Grafo de exemplo: rede social
export const socialGraph: Graph = new Map([
  ["Alice", ["Bob", "Charlie"]],
  ["Bob", ["Alice", "David", "Eve"]],
  ["Charlie", ["Alice", "Frank"]],
  ["David", ["Bob"]],
  ["Eve", ["Bob", "Frank"]],
  ["Frank", ["Charlie", "Eve", "Grace"]],
  ["Grace", ["Frank"]],
]);
