# Desafio 41: Custom Hook para Fetch de Dados

- **Caminho do Ambiente:** `/medium/frontend/desafio-41/`
- **Nível:** Médio
- **Área:** Frontend
- **Conceito Foco:** React Custom Hooks — Reutilização de Lógica
- **Arquivos do Ambiente:** `users.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`users.tsx` tem a mesma lógica de fetch (`loading`, `error`, `data`, `useEffect`) duplicada em dois componentes. Qualquer melhoria (AbortController, retry, cache) precisa ser aplicada em dois lugares.

## Missão

Extraia a lógica de fetch para um custom hook genérico `useFetch<T>(url: string)`. Ambos os componentes devem usar o hook sem nenhuma lógica de fetch própria.

## Critérios de Avaliação

- [ ] Hook `useFetch<T>` genérico implementado em `useFetch.ts`
- [ ] Hook retorna `{ data, loading, error }` tipados corretamente
- [ ] Hook usa `AbortController` para cancelar fetch ao desmontar
- [ ] `UserProfile` e `UserList` usam `useFetch` sem lógica de fetch própria
- [ ] Comportamento idêntico ao original
