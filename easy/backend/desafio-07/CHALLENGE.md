# Desafio 07: Encadeamento Opcional e Nullish Coalescing

- **Caminho do Ambiente:** `/easy/backend/desafio-07/`
- **Nível:** Fácil
- **Área:** Backend
- **Conceito Foco:** Defensive Programming — Optional Chaining / Nullish Coalescing
- **Arquivos do Ambiente:** `profile.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`profile.ts` usa verificações manuais e verbosas de nulidade (`if (user && user.company && user.company.address && ...)`). Esse padrão é propenso a erros — é fácil esquecer um nível da cadeia — e polui o código com lógica de guarda que o JavaScript moderno resolve nativamente.

## Missão

Refatore as três funções usando `?.` (optional chaining) e `??` (nullish coalescing). Cada função deve caber em uma única linha de retorno.

## Critérios de Avaliação

- [ ] Uso correto de `?.` em todos os acessos encadeados opcionais
- [ ] Uso correto de `??` para fallback de valores `null`/`undefined`
- [ ] Nenhum `if` de verificação de nulidade
- [ ] Comportamento idêntico ao original
- [ ] `??` usado em vez de `||` onde `0` ou `false` são valores válidos (ex: `getAge`)
