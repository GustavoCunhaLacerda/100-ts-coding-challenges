# Desafio 62: Race Condition em Cache Assíncrono

- **Caminho do Ambiente:** `/hard/backend/desafio-62/`
- **Nível:** Difícil
- **Área:** Backend
- **Conceito Foco:** Concorrência — Race Condition / Promise Deduplication
- **Arquivos do Ambiente:** `profileCache.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`UserProfileCache.getProfile` tem uma race condition: 10 chamadas simultâneas para o mesmo `userId` disparam 10 fetches paralelos. A solução atual com `loading` Set e recursão é incorreta — pode causar recursão infinita e não resolve o problema de deduplicação.

## Missão

Corrija usando **Promise deduplication**: armazene a Promise em andamento no cache. Chamadas simultâneas para o mesmo `userId` devem compartilhar a mesma Promise, não disparar novos fetches.

## Critérios de Avaliação

- [ ] `Map<string, Promise<object>>` para deduplicar Promises em andamento
- [ ] 10 chamadas simultâneas para o mesmo userId resultam em exatamente 1 fetch
- [ ] Promise removida do mapa de "em andamento" após resolução (sucesso ou erro)
- [ ] Cache de resultado ainda funciona para chamadas subsequentes
- [ ] Sem recursão e sem polling com `setTimeout`
