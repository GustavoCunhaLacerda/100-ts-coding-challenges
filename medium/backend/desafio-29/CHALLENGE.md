# Desafio 29: Substituição de Switch por Polimorfismo

- **Caminho do Ambiente:** `/medium/backend/desafio-29/`
- **Nível:** Médio
- **Área:** Backend
- **Conceito Foco:** OCP — Open/Closed Principle / Polimorfismo
- **Arquivos do Ambiente:** `payment.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`payment.ts` tem dois `switch` statements que crescem a cada novo método de pagamento. Adicionar "Apple Pay" exige modificar duas funções existentes — violando o princípio aberto/fechado. Os comportamentos de cada método estão espalhados em múltiplos lugares.

## Missão

Substitua os `switch` statements por uma hierarquia de classes polimórficas. Cada método de pagamento deve ser uma classe que implementa uma interface `IPaymentProcessor`.

## Critérios de Avaliação

- [ ] Interface `IPaymentProcessor` com métodos `process()` e `getFee()`
- [ ] Uma classe por método de pagamento implementando a interface
- [ ] Adicionar um novo método de pagamento não requer modificar código existente
- [ ] Nenhum `switch` ou `if/else` baseado em tipo de pagamento
- [ ] Comportamento idêntico ao original
