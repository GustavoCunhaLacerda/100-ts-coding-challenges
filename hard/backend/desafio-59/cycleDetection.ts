// Grafo direcionado — detectar ciclos com DFS
type DirectedGraph = Map<string, string[]>;

// Implementação ingênua que não detecta ciclos corretamente
export function hasCycle(graph: DirectedGraph): boolean {
  const visited = new Set<string>();

  function dfs(node: string): boolean {
    if (visited.has(node)) return true; // Bug: visited global não distingue "em progresso" de "concluído"
    visited.add(node);
    const neighbors = graph.get(node) ?? [];
    for (const neighbor of neighbors) {
      if (dfs(neighbor)) return true;
    }
    return false;
  }

  for (const node of graph.keys()) {
    if (dfs(node)) return true;
  }
  return false;
}

// Grafo de dependências de módulos
export const moduleGraph: DirectedGraph = new Map([
  ["app", ["auth", "database"]],
  ["auth", ["database", "cache"]],
  ["database", ["config"]],
  ["cache", ["config"]],
  ["config", []],
]);

// Grafo com ciclo (dependência circular)
export const cyclicGraph: DirectedGraph = new Map([
  ["A", ["B"]],
  ["B", ["C"]],
  ["C", ["A"]], // Ciclo: A -> B -> C -> A
]);
