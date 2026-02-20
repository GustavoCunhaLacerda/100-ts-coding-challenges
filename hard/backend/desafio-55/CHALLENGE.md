# Desafio 55: Injeção de Dependência Manual

- **Caminho do Ambiente:** `/hard/backend/desafio-55/`
- **Nível:** Difícil
- **Área:** Backend
- **Conceito Foco:** DIP — Dependency Inversion / IoC Manual
- **Arquivos do Ambiente:** `authService.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`AuthService` instancia suas dependências internamente e tem configuração hardcoded. Testar `login` sem um banco de dados real é impossível. A chave JWT está no código-fonte.

## Missão

Refatore para injeção de dependência manual: defina interfaces para todas as dependências (`IUserRepository`, `ITokenService`, `IHashService`) e injete-as via construtor. Configurações devem vir de fora da classe.

## Critérios de Avaliação

- [ ] Interfaces `IUserRepository`, `ITokenService`, `IHashService` definidas
- [ ] `AuthService` recebe todas as dependências via construtor
- [ ] Nenhuma instanciação de dependência dentro da classe
- [ ] Nenhuma configuração hardcoded (segredos, timeouts)
- [ ] `MockUserRepository` implementável para testes sem banco
- [ ] Código compila sem erros
