# Desafio 52: Observer Pattern — Eventos de Pedido

- **Caminho do Ambiente:** `/hard/backend/desafio-52/`
- **Nível:** Difícil
- **Área:** Backend
- **Conceito Foco:** Design Patterns — Observer / Event-Driven
- **Arquivos do Ambiente:** `order.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`Order` chama diretamente os sistemas de email, inventário, analytics e webhook quando seu estado muda. Adicionar um novo sistema (ex: SMS) exige modificar a classe `Order`. Remover o analytics em produção também exige modificar `Order`.

## Missão

Implemente o Observer Pattern: `Order` deve emitir eventos (`OrderConfirmed`, `OrderShipped`) e os sistemas interessados devem se registrar como observers. `Order` não deve conhecer nenhum observer concreto.

## Critérios de Avaliação

- [ ] Interface `IOrderObserver` com método `onOrderEvent(event: OrderEvent): void`
- [ ] `Order` tem métodos `subscribe` e `unsubscribe`
- [ ] `Order` emite eventos sem conhecer os observers concretos
- [ ] Observers implementados: `EmailObserver`, `InventoryObserver`, `AnalyticsObserver`
- [ ] Adicionar novo observer não requer modificar `Order`
- [ ] Comportamento idêntico ao original
