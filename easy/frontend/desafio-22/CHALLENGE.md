# Desafio 22: Componente de Botão Reutilizável

- **Caminho do Ambiente:** `/easy/frontend/desafio-22/`
- **Nível:** Fácil
- **Área:** Frontend
- **Conceito Foco:** React — Componentização / API de Componente
- **Arquivos do Ambiente:** `CheckoutPage.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`CheckoutPage` tem três botões com estilos inline duplicados e variantes hardcoded. Qualquer mudança de design (cor, padding, border-radius) exige editar múltiplos lugares. Não há como reutilizar esses botões em outras páginas.

## Missão

Crie um componente `Button` reutilizável com suporte a variantes (`primary`, `danger`, `secondary`) e estado `disabled`. `CheckoutPage` deve usar `<Button />` em vez de `<button>` direto.

## Critérios de Avaliação

- [ ] Componente `Button` criado com props tipadas (`variant`, `disabled`, `onClick`, `children`)
- [ ] Variantes implementadas via CSS Modules ou classes condicionais
- [ ] `Button` estende `React.ButtonHTMLAttributes<HTMLButtonElement>` para aceitar props nativas
- [ ] `CheckoutPage` usa `<Button />` sem nenhum estilo inline
- [ ] Código compila sem erros
