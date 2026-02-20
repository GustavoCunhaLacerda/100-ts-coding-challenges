# Desafio 53: Decorator Pattern — Logging e Métricas

- **Caminho do Ambiente:** `/hard/backend/desafio-53/`
- **Nível:** Difícil
- **Área:** Backend
- **Conceito Foco:** Design Patterns — Decorator / Cross-Cutting Concerns
- **Arquivos do Ambiente:** `userService.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`UserService` tem logging e métricas de performance misturados com a lógica de negócio em cada método. Adicionar um novo método exige copiar o boilerplate de logging. Remover o logging em testes exige modificar a classe.

## Missão

Aplique o Decorator Pattern: crie `LoggingDecorator` e `MetricsDecorator` que envolvem qualquer serviço que implemente `IUserService`. A classe `UserService` deve conter apenas lógica de negócio.

## Critérios de Avaliação

- [ ] Interface `IUserService` definida com todos os métodos públicos
- [ ] `UserService` implementa `IUserService` sem nenhum logging ou métricas
- [ ] `LoggingDecorator` implementa `IUserService` e delega para o serviço interno
- [ ] `MetricsDecorator` implementa `IUserService` e mede tempo de execução
- [ ] Decorators podem ser compostos: `new MetricsDecorator(new LoggingDecorator(new UserService()))`
- [ ] Comportamento idêntico ao original
