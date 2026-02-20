# Desafio 34: Recursão com Caso Base e Proteção de Stack

- **Caminho do Ambiente:** `/medium/backend/desafio-34/`
- **Nível:** Médio
- **Área:** Algoritmo
- **Conceito Foco:** Recursão — Caso Base / Tail Call / Memoização
- **Arquivos do Ambiente:** `recursion.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`recursion.ts` tem três funções recursivas com problemas distintos:
- `flattenDeep`: usa `concat` dentro da recursão, criando arrays intermediários desnecessários — O(n²) em memória
- `fibonacci`: sem memoização — O(2^n), trava para n > 40
- `sumTree`: caso base implícito, não lida com `node === null`

## Missão

Corrija cada função: adicione memoização ao Fibonacci, converta `flattenDeep` para iterativo com stack explícita, e torne o caso base de `sumTree` explícito e seguro.

## Critérios de Avaliação

- [ ] `fibonacci(40)` executa em menos de 1ms com memoização
- [ ] `flattenDeep` usa stack iterativa em vez de recursão (sem risco de stack overflow)
- [ ] `sumTree` lida com `node === null | undefined` explicitamente
- [ ] Todos os casos base são explícitos e documentados
- [ ] Comportamento idêntico ao original para entradas válidas
