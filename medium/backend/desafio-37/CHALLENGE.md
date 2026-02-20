# Desafio 37: Cache com Memoização

- **Caminho do Ambiente:** `/medium/backend/desafio-37/`
- **Nível:** Médio
- **Área:** Algoritmo
- **Conceito Foco:** Memoização / Cache / Performance
- **Arquivos do Ambiente:** `memoization.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`memoization.ts` recalcula `isPrime` para cada número sem cache, instancia `Intl.NumberFormat` a cada item do array (caro), e não aproveita resultados anteriores de `getPrimesUpTo`.

## Missão

Implemente memoização genérica com uma função `memoize<T>` reutilizável. Aplique-a em `isPrime`. Extraia e reutilize a instância de `Intl.NumberFormat` fora do loop.

## Critérios de Avaliação

- [ ] Função `memoize<T extends (...args: any[]) => any>` genérica implementada
- [ ] `isPrime` memoizada — segunda chamada com mesmo argumento retorna do cache
- [ ] `Intl.NumberFormat` instanciado uma única vez fora do `.map()`
- [ ] `getPrimesUpTo(1000)` chamado duas vezes — segunda chamada é instantânea
- [ ] Resultados idênticos ao original
