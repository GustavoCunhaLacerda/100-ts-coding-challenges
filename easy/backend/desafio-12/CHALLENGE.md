# Desafio 12: Imutabilidade com Spread e Readonly

- **Caminho do Ambiente:** `/easy/backend/desafio-12/`
- **Nível:** Fácil
- **Área:** Backend
- **Conceito Foco:** Imutabilidade — Spread Operator / Readonly
- **Arquivos do Ambiente:** `cart.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`cart.ts` muta diretamente o objeto `cart` recebido como parâmetro em todas as funções (`push`, `splice`, atribuição direta). Isso cria bugs sutis: o chamador não espera que seu objeto seja modificado como efeito colateral. Em ambientes com estado compartilhado (Redux, React), esse padrão causa re-renders incorretos e estados inconsistentes.

## Missão

Refatore todas as funções para serem imutáveis: cada função deve retornar um **novo** objeto `Cart` sem modificar o original. Use `Readonly<T>` nos parâmetros para que o TypeScript impeça mutações acidentais.

## Critérios de Avaliação

- [ ] Nenhuma mutação direta nos parâmetros recebidos
- [ ] Cada função retorna um novo objeto construído com spread (`{ ...cart }`, `[...cart.items]`)
- [ ] Parâmetros `cart` tipados como `Readonly<Cart>` onde aplicável
- [ ] `calculateTotal` refatorado para usar `reduce` em vez de `forEach` com variável mutável
- [ ] Comportamento idêntico ao original
