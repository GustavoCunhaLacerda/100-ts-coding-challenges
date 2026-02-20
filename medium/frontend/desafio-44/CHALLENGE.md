# Desafio 44: Efeito Colateral em Render

- **Caminho do Ambiente:** `/medium/frontend/desafio-44/`
- **Nível:** Médio
- **Área:** Frontend
- **Conceito Foco:** React — Pureza de Render / useEffect
- **Arquivos do Ambiente:** `SearchPage.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`SearchPage` dispara um `fetch` diretamente no corpo do componente (fora de `useEffect`), causando um loop infinito: o fetch atualiza `results`, que causa re-render, que dispara outro fetch. Também muta uma variável externa (`renderCount`) durante o render — violação da pureza.

## Missão

Mova o fetch para `useEffect` com as dependências corretas. Adicione debounce de 300ms para não disparar a cada keystroke. Remova a mutação de variável externa.

## Critérios de Avaliação

- [ ] Fetch movido para `useEffect` com `[query]` nas dependências
- [ ] Debounce de 300ms implementado (com `setTimeout`/`clearTimeout` no cleanup)
- [ ] Nenhuma mutação de variável externa durante o render
- [ ] `AbortController` para cancelar fetches pendentes
- [ ] Sem loop infinito de renders
