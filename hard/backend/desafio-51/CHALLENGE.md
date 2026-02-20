# Desafio 51: Strategy Pattern — Cálculo de Preços

- **Caminho do Ambiente:** `/hard/backend/desafio-51/`
- **Nível:** Difícil
- **Área:** Backend
- **Conceito Foco:** Design Patterns — Strategy
- **Arquivos do Ambiente:** `pricingService.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`PricingService.calculatePrice` tem um `if/else` com 4 estratégias de precificação diferentes. Adicionar um novo tipo de cliente (ex: `"partner"`) exige modificar a classe existente. Testar cada estratégia isoladamente é impossível sem instanciar o serviço completo.

## Missão

Aplique o Strategy Pattern: defina uma interface `IPricingStrategy` e implemente uma classe por estratégia. `PricingService` deve receber a estratégia via construtor ou método, sem conhecer as implementações concretas.

## Critérios de Avaliação

- [ ] Interface `IPricingStrategy` com método `calculate(basePrice: number, quantity: number): number`
- [ ] Uma classe por estratégia (`RegularPricing`, `VipPricing`, `EmployeePricing`, `WholesalePricing`)
- [ ] `PricingService` não contém nenhum `if/else` baseado em tipo de cliente
- [ ] Adicionar nova estratégia não requer modificar `PricingService`
- [ ] Cada estratégia testável isoladamente
- [ ] Comportamento idêntico ao original
