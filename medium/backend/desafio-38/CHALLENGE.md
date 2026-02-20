# Desafio 38: Estrutura de Dados Adequada

- **Caminho do Ambiente:** `/medium/backend/desafio-38/`
- **Nível:** Médio
- **Área:** Algoritmo
- **Conceito Foco:** Estruturas de Dados — Map vs. Array / Complexidade
- **Arquivos do Ambiente:** `sessionStore.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`sessionStore.ts` usa `Array` para armazenar sessões e faz buscas lineares O(n) para todas as operações. Com 10.000 sessões ativas, cada `getSession` percorre até 10.000 itens. A estrutura correta para lookup por chave é `Map`.

## Missão

Substitua o `Array` por dois `Map`s: um indexado por `token` e outro por `userId`. Todas as operações de busca devem ser O(1).

## Critérios de Avaliação

- [ ] `getSession(token)` é O(1) com `Map<string, Session>`
- [ ] `invalidateSession(userId)` é O(1) com índice por userId
- [ ] `createSession` mantém os dois índices sincronizados
- [ ] `cleanExpiredSessions` ainda funciona corretamente
- [ ] Comportamento idêntico ao original
