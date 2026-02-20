# Desafio 21: Key Prop em Listas Dinâmicas

- **Caminho do Ambiente:** `/easy/frontend/desafio-21/`
- **Nível:** Fácil
- **Área:** Frontend
- **Conceito Foco:** React — Reconciliação / Key Prop
- **Arquivos do Ambiente:** `TodoList.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`TodoList` usa o `index` do array como `key` nos itens da lista. Isso causa bugs de reconciliação quando itens são adicionados no meio, removidos, ou reordenados: o React reutiliza o DOM node errado, causando estados visuais incorretos (checkboxes marcados no item errado, animações no item errado).

## Missão

Corrija a `key` prop para usar o identificador estável de cada item (`todo.id`). Como bônus, adicione a funcionalidade de remover um todo e observe como o comportamento correto depende da key estável.

## Critérios de Avaliação

- [ ] `key` usa `todo.id` em vez de `index`
- [ ] Funcionalidade de remoção adicionada (botão por item)
- [ ] Ao remover um item do meio, os demais mantêm seu estado visual correto
- [ ] Código compila sem erros
