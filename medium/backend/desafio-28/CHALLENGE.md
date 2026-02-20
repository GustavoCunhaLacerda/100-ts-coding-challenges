# Desafio 28: Validação Acoplada à Lógica de Negócio

- **Caminho do Ambiente:** `/medium/backend/desafio-28/`
- **Nível:** Médio
- **Área:** Backend
- **Conceito Foco:** Separação de Camadas — Validation Layer / Domain Logic
- **Arquivos do Ambiente:** `orderService.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`placeOrder` mistura três camadas em uma função: validação de entrada, lógica de negócio (cálculo de desconto) e persistência. Adicionar um novo campo obrigatório exige modificar a função de negócio. Reutilizar a validação em outro endpoint é impossível sem duplicação.

## Missão

Separe a validação em uma camada dedicada (`orderValidator.ts`). A função de negócio deve receber dados já validados e focar apenas nas regras de domínio.

## Critérios de Avaliação

- [ ] Validação de entrada extraída para `orderValidator.ts` com função(ões) puras e testáveis
- [ ] `placeOrder` não contém validações de formato/presença de campos
- [ ] Erros de validação e erros de negócio são tipos distintos
- [ ] Lógica de cupom extraída para função separada de domínio
- [ ] Comportamento idêntico ao original
