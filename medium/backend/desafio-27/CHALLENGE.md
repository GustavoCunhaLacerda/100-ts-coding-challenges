# Desafio 27: Classe com Múltiplas Responsabilidades

- **Caminho do Ambiente:** `/medium/backend/desafio-27/`
- **Nível:** Médio
- **Área:** Backend
- **Conceito Foco:** SRP — Single Responsibility Principle / OOP
- **Arquivos do Ambiente:** `UserManager.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`UserManager` acumula 5 responsabilidades distintas: autenticação, CRUD de usuários, persistência em arquivo, logging e relatórios. Qualquer mudança em uma responsabilidade (ex: trocar arquivo por banco de dados) exige modificar a classe inteira, violando o princípio aberto/fechado.

## Missão

Decomponha `UserManager` em classes com responsabilidade única. Defina interfaces para as dependências (persistência, logger) para permitir substituição sem modificar as classes de negócio.

## Critérios de Avaliação

- [ ] Cada classe resultante tem uma única razão para mudar
- [ ] Persistência abstraída atrás de uma interface `IUserRepository`
- [ ] Logger abstraído atrás de uma interface `ILogger`
- [ ] Classe de autenticação depende de abstrações, não de implementações concretas
- [ ] Comportamento idêntico ao original
- [ ] Código compila sem erros
