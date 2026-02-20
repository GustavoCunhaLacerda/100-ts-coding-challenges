# Desafio 08: Array Methods vs. Loops Imperativos

- **Caminho do Ambiente:** `/easy/backend/desafio-08/`
- **Nível:** Fácil
- **Área:** Backend
- **Conceito Foco:** Programação Funcional — Array Methods Semânticos
- **Arquivos do Ambiente:** `reports.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`reports.ts` usa loops `for` imperativos com índices numéricos para todas as operações sobre arrays. O código funciona, mas não comunica a intenção: é preciso ler o corpo inteiro do loop para entender o que ele faz. Além disso, variáveis mutáveis auxiliares (`let sum`, `const result = []`) aumentam a superfície de bugs.

## Missão

Substitua todos os loops `for` pelos métodos funcionais de array mais semânticos para cada caso (`filter`, `map`, `reduce`, `some`).

## Critérios de Avaliação

- [ ] Nenhum loop `for` ou `while` no código final
- [ ] Cada função usa o método mais semântico para sua intenção
- [ ] Nenhuma variável mutável auxiliar no corpo das funções
- [ ] Comportamento idêntico ao original
- [ ] Código mais conciso e legível que o original
