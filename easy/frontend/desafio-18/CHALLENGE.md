# Desafio 18: Prop Drilling de Um Nível

- **Caminho do Ambiente:** `/easy/frontend/desafio-18/`
- **Nível:** Fácil
- **Área:** Frontend
- **Conceito Foco:** React — Props / Identificação de Prop Drilling
- **Arquivos do Ambiente:** `App.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`App` passa `theme` e `username` para `Header`, que passa para `UserInfo`, que passa para `Avatar`. `Header` e `UserInfo` não usam `theme` diretamente — apenas repassam para o filho. Isso é prop drilling: componentes intermediários carregam props que não são deles.

## Missão

Identifique quais componentes são intermediários desnecessários e refatore para eliminar o prop drilling. Neste nível, a solução pode ser reorganização de componentes (composição) — sem Context API ainda.

## Critérios de Avaliação

- [ ] Componentes intermediários não recebem props que não usam
- [ ] A árvore de componentes ainda faz sentido semanticamente
- [ ] Comportamento visual idêntico
- [ ] Código compila sem erros
- [ ] Solução não usa Context API (reservada para o desafio 43)
