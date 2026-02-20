# Desafio 24: Acessibilidade em Formulário Simples

- **Caminho do Ambiente:** `/easy/frontend/desafio-24/`
- **Nível:** Fácil
- **Área:** Frontend
- **Conceito Foco:** A11y — Semântica HTML / ARIA
- **Arquivos do Ambiente:** `ContactForm.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`ContactForm` usa `<span>` em vez de `<label>`, não associa labels aos inputs, usa `type="text"` para email, e não anuncia erros para leitores de tela. Um usuário de leitor de tela não consegue navegar ou usar este formulário.

## Missão

Corrija todos os problemas de acessibilidade: use `<label htmlFor>`, `id` nos inputs, `type="email"`, `aria-describedby` para erros, e `role="alert"` nas mensagens de erro.

## Critérios de Avaliação

- [ ] Cada campo tem um `<label htmlFor>` associado ao `id` do input
- [ ] Input de email usa `type="email"`
- [ ] Mensagens de erro têm `role="alert"` ou `aria-live="polite"`
- [ ] Cada input tem `aria-describedby` apontando para o id do erro correspondente
- [ ] Formulário navegável e compreensível apenas com teclado
- [ ] Código compila sem erros
