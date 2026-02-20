# Desafio 32: Serviço com Dependência Hardcoded

- **Caminho do Ambiente:** `/medium/backend/desafio-32/`
- **Nível:** Médio
- **Área:** Backend
- **Conceito Foco:** DIP — Dependency Inversion Principle / Injeção de Dependência
- **Arquivos do Ambiente:** `notificationService.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`NotificationService` instancia `nodemailer` e `twilio` diretamente no construtor com credenciais hardcoded. Testar a lógica de `notifyUser` dispara emails e SMS reais. Trocar o provedor de SMS exige modificar a classe de negócio.

## Missão

Defina interfaces `IEmailSender` e `ISmsSender`. Injete as implementações via construtor. Crie implementações mock para testes.

## Critérios de Avaliação

- [ ] Interfaces `IEmailSender` e `ISmsSender` definidas
- [ ] `NotificationService` recebe as implementações via construtor
- [ ] Nenhuma instanciação de `nodemailer` ou `twilio` dentro da classe
- [ ] `MockEmailSender` e `MockSmsSender` implementados para testes
- [ ] Credenciais removidas do código (usar variáveis de ambiente)
- [ ] Código compila sem erros
