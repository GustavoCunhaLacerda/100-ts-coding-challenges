# Desafio 63: Paralelismo com Promise.all e Concorrência Controlada

- **Caminho do Ambiente:** `/hard/backend/desafio-63/`
- **Nível:** Difícil
- **Área:** Backend
- **Conceito Foco:** Concorrência — Promise.all / Concurrency Limiting
- **Arquivos do Ambiente:** `dashboard.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`generateDashboardReport` faz 5 requisições independentes sequencialmente (~2500ms total). `processOrders` processa ordens uma por vez. Ambas desperdiçam tempo em operações que poderiam ser paralelas.

## Missão

Paralelize `generateDashboardReport` com `Promise.all`. Para `processOrders`, implemente concorrência controlada com limite de 3 requisições simultâneas (para não sobrecarregar a API).

## Critérios de Avaliação

- [ ] `generateDashboardReport` usa `Promise.all` — tempo total ≈ latência da requisição mais lenta
- [ ] `processOrders` processa no máximo 3 ordens simultaneamente
- [ ] Implementação de `pLimit` ou similar sem biblioteca externa
- [ ] Erros em uma requisição não cancelam as outras (use `Promise.allSettled` onde apropriado)
- [ ] Comportamento idêntico ao original
