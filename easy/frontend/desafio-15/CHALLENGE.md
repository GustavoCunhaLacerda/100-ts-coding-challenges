# Desafio 15: Extração de Componente de Lista

- **Caminho do Ambiente:** `/easy/frontend/desafio-15/`
- **Nível:** Fácil
- **Área:** Frontend
- **Conceito Foco:** React — Componentização / Single Responsibility
- **Arquivos do Ambiente:** `ProductPage.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`ProductPage` renderiza a lógica de filtro e o JSX de cada item de produto diretamente no mesmo componente. O JSX inline dentro do `.map()` mistura estrutura de layout com lógica de apresentação de item. À medida que o card de produto crescer (imagem, botão de compra, badge de estoque), o componente se tornará ingerenciável.

## Missão

Extraia o card de produto para um componente `ProductCard` separado com props tipadas. `ProductPage` deve delegar a renderização de cada item para `ProductCard`.

## Critérios de Avaliação

- [ ] Componente `ProductCard` criado em arquivo separado com props tipadas
- [ ] `ProductPage` usa `<ProductCard />` dentro do `.map()`
- [ ] Nenhum JSX de item inline no `.map()` de `ProductPage`
- [ ] `key` prop permanece no componente raiz dentro do `.map()`
- [ ] Comportamento visual idêntico ao original
