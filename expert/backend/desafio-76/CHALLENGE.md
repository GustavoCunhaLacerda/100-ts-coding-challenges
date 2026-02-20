# Desafio 76: Arquitetura Hexagonal — Ports & Adapters

- **Caminho do Ambiente:** `/expert/backend/desafio-76/`
- **Nível:** Expert
- **Área:** Backend
- **Conceito Foco:** Arquitetura Hexagonal — Ports & Adapters / Clean Architecture
- **Arquivos do Ambiente:** `server.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`server.ts` é um monólito acoplado: lógica de negócio, validação, acesso a banco de dados e HTTP estão todos no mesmo arquivo. Testar a lógica de criação de usuário exige um servidor HTTP e um banco de dados reais.

## Missão

Refatore para Arquitetura Hexagonal com a seguinte estrutura:

```
src/
  domain/          # Entidades e regras de negócio puras
  application/     # Use cases (ports de entrada)
  infrastructure/  # Adapters (HTTP, banco, email)
```

O use case `CreateUserUseCase` deve ser testável sem HTTP e sem banco de dados.

## Critérios de Avaliação

- [ ] `domain/User.ts` — entidade com validações de domínio
- [ ] `application/CreateUserUseCase.ts` — use case com interfaces de ports
- [ ] `infrastructure/UserRepositoryPostgres.ts` — adapter de banco
- [ ] `infrastructure/ExpressUserController.ts` — adapter HTTP
- [ ] `CreateUserUseCase` testável com `MockUserRepository`
- [ ] Nenhuma dependência de Express ou pg no domínio/application
