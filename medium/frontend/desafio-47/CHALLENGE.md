# Desafio 47: Debounce em Campo de Busca

- **Caminho do Ambiente:** `/medium/frontend/desafio-47/`
- **Nível:** Médio
- **Área:** Frontend
- **Conceito Foco:** Performance — Debounce / Custom Hook
- **Arquivos do Ambiente:** `SearchBox.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`SearchBox` dispara um fetch a cada keystroke. Digitar "notebook" dispara 8 requisições, das quais 7 são desperdiçadas. Em produção, isso sobrecarrega a API e causa race conditions (respostas chegam fora de ordem).

## Missão

Implemente um custom hook `useDebounce<T>(value: T, delay: number): T` e aplique-o no `query` antes de disparar o fetch. Adicione `AbortController` para cancelar requisições desatualizadas.

## Critérios de Avaliação

- [ ] Hook `useDebounce<T>` implementado em `useDebounce.ts`
- [ ] Fetch só dispara após 300ms de inatividade no campo
- [ ] `AbortController` cancela requisições anteriores quando nova query chega
- [ ] `SearchBox` usa `useDebounce` sem lógica de debounce própria
- [ ] Comportamento de UX idêntico ao original (resultados aparecem após pausa)
