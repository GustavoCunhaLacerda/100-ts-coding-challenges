# Desafio 13: Promises vs. Async/Await Legível

- **Caminho do Ambiente:** `/easy/backend/desafio-13/`
- **Nível:** Fácil
- **Área:** Backend
- **Conceito Foco:** Assincronismo — Async/Await / Promise.all
- **Arquivos do Ambiente:** `api.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`getUserData` usa `.then()` encadeados em três níveis de profundidade — o famoso "callback hell" em versão Promise. Além do problema de legibilidade, as três requisições são feitas **sequencialmente** quando poderiam ser paralelas, desperdiçando tempo de resposta.

## Missão

Refatore para `async/await` e use `Promise.all` para paralelizar as três requisições independentes. Trate erros com `try/catch` semântico.

## Critérios de Avaliação

- [ ] Uso de `async/await` em vez de `.then()` encadeados
- [ ] As três requisições são disparadas em paralelo com `Promise.all`
- [ ] Tratamento de erro com `try/catch` (sem `.catch()` encadeado)
- [ ] Tipo de retorno explícito e mais preciso que `object`
- [ ] Código compila sem erros
