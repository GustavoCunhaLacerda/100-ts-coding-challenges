# Desafio 09: Tratamento de Erros Semântico

- **Caminho do Ambiente:** `/easy/backend/desafio-09/`
- **Nível:** Fácil
- **Área:** Backend
- **Conceito Foco:** Error Handling — Erros Tipados e Semânticos
- **Arquivos do Ambiente:** `config.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`config.ts` tem dois problemas graves de tratamento de erros:

1. `readConfig` silencia qualquer erro (arquivo não encontrado, JSON inválido) retornando `{}` — o chamador não tem como saber que algo falhou.
2. `fetchUser` também engole erros silenciosamente, e não verifica se a resposta HTTP foi bem-sucedida (`res.ok`).
3. O `catch (e)` usa `e` como `any` implícito — em TypeScript moderno, `e` é `unknown`.

## Missão

Refatore o tratamento de erros para ser explícito e semântico: diferencie tipos de erro, relance quando necessário, e nunca silencie falhas sem intenção clara.

## Critérios de Avaliação

- [ ] `catch (e)` trata `e` como `unknown` com narrowing correto (`instanceof Error`)
- [ ] Erros distintos (arquivo não encontrado vs. JSON inválido) são diferenciados
- [ ] `fetchUser` verifica `res.ok` e lança erro em respostas HTTP de falha
- [ ] Nenhum erro é silenciado sem uma razão explícita documentada
- [ ] Tipos de retorno refletem a possibilidade de falha (ex: `T | null` ou exceção)
