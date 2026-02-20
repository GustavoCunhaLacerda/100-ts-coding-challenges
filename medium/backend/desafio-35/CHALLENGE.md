# Desafio 35: Busca Linear vs. Busca Eficiente

- **Caminho do Ambiente:** `/medium/backend/desafio-35/`
- **Nível:** Médio
- **Área:** Algoritmo
- **Conceito Foco:** Complexidade — O(n) vs O(1) / O(n²) vs O(n)
- **Arquivos do Ambiente:** `search.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`search.ts` faz buscas lineares O(n) em um catálogo de 100.000 produtos e uma interseção O(n²) entre listas. Para buscas frequentes em dados estáticos ou semi-estáticos, isso é um gargalo evitável com indexação prévia.

## Missão

Substitua as buscas lineares por estruturas de dados indexadas (`Map`) construídas uma única vez. Reduza a interseção de O(n²) para O(n) usando `Set`.

## Critérios de Avaliação

- [ ] `findProductById` usa `Map<number, Product>` — O(1) por busca
- [ ] `findProductBySku` usa `Map<string, Product>` — O(1) por busca
- [ ] `getCommonIds` usa `Set` — O(n) em vez de O(n²)
- [ ] Índices construídos uma única vez, não a cada chamada
- [ ] Resultados idênticos ao original
