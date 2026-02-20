# Desafio 16: Controlled Components em Formulários

- **Caminho do Ambiente:** `/easy/frontend/desafio-16/`
- **Nível:** Fácil
- **Área:** Frontend
- **Conceito Foco:** React — Controlled Inputs / useState
- **Arquivos do Ambiente:** `LoginForm.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`LoginForm` usa o padrão de **uncontrolled component**: lê os valores diretamente do DOM via `e.currentTarget.elements` no momento do submit. Isso funciona para casos simples, mas impede validação em tempo real, desabilita botões condicionalmente, e torna o estado do formulário invisível para o React.

## Missão

Converta para **controlled components** usando `useState` para cada campo. O estado do React deve ser a única fonte de verdade dos valores do formulário.

## Critérios de Avaliação

- [ ] Cada campo tem um `useState` correspondente
- [ ] Cada `<input>` tem `value` e `onChange` controlados pelo estado
- [ ] O `handleSubmit` lê os valores do estado, não do DOM
- [ ] Botão de submit desabilitado quando email ou senha estão vazios
- [ ] Código compila sem erros
