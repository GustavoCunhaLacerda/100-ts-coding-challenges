# Desafio 61: Programação Dinâmica — 0/1 Knapsack

- **Caminho do Ambiente:** `/hard/backend/desafio-61/`
- **Nível:** Difícil
- **Área:** Algoritmo
- **Conceito Foco:** Programação Dinâmica — 0/1 Knapsack
- **Arquivos do Ambiente:** `knapsack.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`knapsack` usa força bruta O(2^n): para 30 itens, isso é mais de 1 bilhão de combinações. A solução com DP reduz para O(n * capacity).

## Missão

Implemente `knapsack` com Programação Dinâmica bottom-up (tabulação). A função deve retornar o valor máximo e os itens selecionados (backtracking na tabela DP).

## Critérios de Avaliação

- [ ] Tabela DP 2D `dp[i][w]` construída corretamente
- [ ] Backtracking implementado para recuperar os itens selecionados
- [ ] `knapsack(sampleItems, 5)` retorna valor máximo correto
- [ ] Complexidade O(n * capacity) tempo e espaço
- [ ] Resultado idêntico à força bruta para os itens de exemplo
