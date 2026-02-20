# Desafio 59: DFS — Detecção de Ciclos em Grafo Direcionado

- **Caminho do Ambiente:** `/hard/backend/desafio-59/`
- **Nível:** Difícil
- **Área:** Algoritmo
- **Conceito Foco:** DFS — Depth-First Search / Detecção de Ciclos
- **Arquivos do Ambiente:** `cycleDetection.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`hasCycle` usa um único `Set` de visitados, mas não distingue entre nós "em progresso" (na pilha de recursão atual) e nós "concluídos" (já processados completamente). Isso causa falsos positivos: um nó visitado em um caminho anterior é incorretamente detectado como ciclo.

## Missão

Corrija `hasCycle` usando o algoritmo correto de DFS com três estados: `unvisited`, `in-progress`, `done`. Implemente também `topologicalSort` que usa o mesmo DFS e lança erro se houver ciclo.

## Critérios de Avaliação

- [ ] `hasCycle(moduleGraph)` retorna `false`
- [ ] `hasCycle(cyclicGraph)` retorna `true`
- [ ] Três estados de visita implementados corretamente
- [ ] `topologicalSort` implementado e retorna ordem válida para `moduleGraph`
- [ ] `topologicalSort` lança erro para `cyclicGraph`
