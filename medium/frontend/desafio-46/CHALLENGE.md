# Desafio 46: Imutabilidade no Estado do Carrinho

- **Caminho do Ambiente:** `/medium/frontend/desafio-46/`
- **Nível:** Médio
- **Área:** Frontend
- **Conceito Foco:** React — Imutabilidade de Estado / Atualização Correta
- **Arquivos do Ambiente:** `ShoppingCart.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`incrementQty` e `decrementQty` mutam o objeto `item` diretamente antes de chamar `setItems`. Embora o `[...items]` crie um novo array, os objetos internos são as mesmas referências — o React pode não detectar a mudança em alguns cenários, e ferramentas de debug (Redux DevTools, React DevTools) não conseguem rastrear o histórico de mudanças.

## Missão

Corrija todas as funções de atualização para serem imutáveis: use `.map()` para criar novos objetos ao invés de mutar os existentes.

## Critérios de Avaliação

- [ ] `incrementQty` usa `.map()` retornando novo objeto para o item modificado
- [ ] `decrementQty` usa `.map()` retornando novo objeto para o item modificado
- [ ] Nenhuma mutação direta de propriedades de objetos no estado
- [ ] Funções de atualização usam a forma funcional do setter: `setItems(prev => ...)`
- [ ] Comportamento idêntico ao original
