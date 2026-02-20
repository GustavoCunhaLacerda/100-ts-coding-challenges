# Desafio 39: useState Excessivo — Consolidação de Estado

- **Caminho do Ambiente:** `/medium/frontend/desafio-39/`
- **Nível:** Médio
- **Área:** Frontend
- **Conceito Foco:** React — Consolidação de Estado / useState vs. useReducer
- **Arquivos do Ambiente:** `CheckoutForm.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`CheckoutForm` tem 14 chamadas `useState` separadas para campos relacionados. Isso cria 14 re-renders independentes, dificulta reset do formulário (exige chamar 11 setters), e torna impossível derivar estado calculado de forma limpa.

## Missão

Consolide os estados relacionados em objetos agrupados por domínio (`contact`, `address`, `payment`) usando `useState` com objetos. O estado de submissão (`isSubmitting`, `submitError`, `submitSuccess`) deve ser consolidado em um único `useReducer`.

## Critérios de Avaliação

- [ ] Campos de contato consolidados em um único `useState<ContactState>`
- [ ] Campos de endereço consolidados em um único `useState<AddressState>`
- [ ] Campos de pagamento consolidados em um único `useState<PaymentState>`
- [ ] Estado de submissão gerenciado com `useReducer`
- [ ] Reset do formulário possível com uma única chamada
- [ ] Comportamento idêntico ao original
