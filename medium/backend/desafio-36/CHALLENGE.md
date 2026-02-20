# Desafio 36: Ordenação Correta e Eficiente

- **Caminho do Ambiente:** `/medium/backend/desafio-36/`
- **Nível:** Médio
- **Área:** Algoritmo
- **Conceito Foco:** Sorting — Comparadores / Locale / Estabilidade
- **Arquivos do Ambiente:** `sorting.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`sorting.ts` tem três problemas de ordenação: bubble sort manual onde `Array.sort` é suficiente, ordenação sem critério de desempate (instável), e ordenação de strings sem `localeCompare` (quebra com acentos e caracteres especiais).

## Missão

Substitua o bubble sort por `Array.sort` com comparador correto. Adicione critério de desempate em `sortUsers`. Corrija `sortNames` para usar `localeCompare` com locale explícito.

## Critérios de Avaliação

- [ ] `sortByPrice` usa `Array.sort` com comparador — sem loops manuais
- [ ] `sortUsers` tem critério de desempate por `name` quando `score` é igual
- [ ] `sortNames` usa `localeCompare` com locale `"pt-BR"`
- [ ] `"Álvaro"` aparece antes de `"Zebra"` em `sortNames`
- [ ] Todas as funções retornam novo array (imutabilidade preservada)
