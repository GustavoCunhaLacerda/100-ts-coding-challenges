# Desafio 20: useEffect com Dependências Incorretas

- **Caminho do Ambiente:** `/easy/frontend/desafio-20/`
- **Nível:** Fácil
- **Área:** Frontend
- **Conceito Foco:** React Hooks — useEffect / Dependency Array / Cleanup
- **Arquivos do Ambiente:** `PostViewer.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`PostViewer` tem dois `useEffect` com problemas:

1. O primeiro tem `[]` como dependências, então nunca re-executa quando `postId` muda — clicar nos botões não atualiza o post.
2. O segundo não tem array de dependências, então executa em **todo** render — incluindo renders desnecessários.
3. Nenhum dos dois tem função de cleanup para cancelar operações assíncronas pendentes.

## Missão

Corrija os arrays de dependências e adicione cleanup adequado usando `AbortController` para cancelar fetches pendentes.

## Critérios de Avaliação

- [ ] Primeiro `useEffect` tem `[postId]` nas dependências
- [ ] Segundo `useEffect` tem `[post]` nas dependências
- [ ] Primeiro `useEffect` usa `AbortController` e retorna cleanup que chama `abort()`
- [ ] Clicar nos botões atualiza o post corretamente
- [ ] Código compila sem erros
