# Desafio 58: BFS — Caminho Mais Curto em Grafo

- **Caminho do Ambiente:** `/hard/backend/desafio-58/`
- **Nível:** Difícil
- **Área:** Algoritmo
- **Conceito Foco:** BFS — Breadth-First Search / Grafos
- **Arquivos do Ambiente:** `graph.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`findPath` usa DFS (busca em profundidade) que encontra **um** caminho, mas não necessariamente o **mais curto**. Em uma rede social, "graus de separação" exige o caminho com menos arestas — o que BFS garante.

## Missão

Implemente `findShortestPath` usando BFS. A função deve retornar o caminho com o menor número de arestas entre `start` e `end`, ou `null` se não houver caminho.

## Critérios de Avaliação

- [ ] BFS implementado com fila (array como queue)
- [ ] Retorna o caminho com menor número de arestas
- [ ] `findShortestPath("Alice", "Grace")` retorna `["Alice", "Charlie", "Frank", "Grace"]` (3 arestas)
- [ ] Lida com grafos desconexos (retorna `null`)
- [ ] Complexidade O(V + E) onde V = vértices, E = arestas
