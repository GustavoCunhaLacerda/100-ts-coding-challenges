# Desafio 60: Programação Dinâmica — Top-Down e Bottom-Up

- **Caminho do Ambiente:** `/hard/backend/desafio-60/`
- **Nível:** Difícil
- **Área:** Algoritmo
- **Conceito Foco:** Programação Dinâmica — Memoização / Tabulação
- **Arquivos do Ambiente:** `dp.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`dp.ts` tem três funções com complexidade exponencial: `fib` O(2^n), `countPaths` O(2^(m+n)), e `lcs` O(2^(m+n)). `fib(40)` trava por segundos. `lcs` com strings de 20 caracteres é impraticável.

## Missão

Implemente as três funções com Programação Dinâmica. Use top-down (memoização) para `fib` e `lcs`, e bottom-up (tabulação) para `countPaths`.

## Critérios de Avaliação

- [ ] `fib(50)` executa em menos de 1ms com memoização
- [ ] `countPaths(20, 20)` executa em menos de 1ms com tabulação
- [ ] `lcs("ABCBDAB", "BDCAB")` retorna `4` em menos de 1ms
- [ ] Complexidade de `fib`: O(n) tempo, O(n) espaço
- [ ] Complexidade de `countPaths`: O(m*n) tempo, O(m*n) espaço
- [ ] Resultados idênticos às versões recursivas para entradas pequenas
