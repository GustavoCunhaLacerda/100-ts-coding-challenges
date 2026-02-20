# Desafio 23: Feedback Visual de Loading State

- **Caminho do Ambiente:** `/easy/frontend/desafio-23/`
- **Nível:** Fácil
- **Área:** Frontend
- **Conceito Foco:** React — Estado Local / UX / Prevenção de Ação Dupla
- **Arquivos do Ambiente:** `PaymentButton.tsx`, `package.json`, `tsconfig.json`

## Cenário Inicial

`PaymentButton` tem o estado `loading` mas não o usa para nada: o botão não é desabilitado durante o processamento, não há feedback visual, e o usuário pode clicar múltiplas vezes disparando pagamentos duplicados.

## Missão

Use o estado `loading` para: desabilitar o botão durante o processamento, exibir um spinner ou texto alternativo, e prevenir submissões duplicadas.

## Critérios de Avaliação

- [ ] Botão desabilitado (`disabled`) quando `loading === true`
- [ ] Texto do botão muda para "Processing..." durante o loading
- [ ] Spinner visual (CSS puro ou emoji) exibido durante o loading
- [ ] Múltiplos cliques rápidos não disparam múltiplas chamadas
- [ ] Código compila sem erros
