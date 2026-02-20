# Desafio 54: Factory Method — Criação de Notificações

- **Caminho do Ambiente:** `/hard/backend/desafio-54/`
- **Nível:** Difícil
- **Área:** Backend
- **Conceito Foco:** Design Patterns — Factory Method
- **Arquivos do Ambiente:** `notifications.ts`, `package.json`, `tsconfig.json`

## Cenário Inicial

`notifications.ts` instancia objetos de notificação diretamente com `new` espalhados pelo código. Cada ponto de criação precisa conhecer os detalhes de construção de cada tipo. Adicionar um novo tipo de notificação exige buscar todos os `new` no código.

```ts
// Código inicial — instanciação direta espalhada
class EmailNotification {
  constructor(public to: string, public subject: string, public body: string) {}
  send() { console.log(`Email to ${this.to}: ${this.subject}`); }
}

class PushNotification {
  constructor(public deviceToken: string, public title: string, public payload: object) {}
  send() { console.log(`Push to ${this.deviceToken}: ${this.title}`); }
}

class SMSNotification {
  constructor(public phone: string, public message: string) {}
  send() { console.log(`SMS to ${this.phone}: ${this.message}`); }
}

// Criação espalhada pelo código
function notifyUserRegistration(user: { email: string; phone: string; deviceToken: string }) {
  const email = new EmailNotification(user.email, "Welcome!", "Thanks for registering.");
  const sms = new SMSNotification(user.phone, "Welcome to our platform!");
  const push = new PushNotification(user.deviceToken, "Welcome!", { action: "open_app" });
  email.send(); sms.send(); push.send();
}
```

## Missão

Implemente o Factory Method: crie uma `NotificationFactory` com métodos de fábrica para cada tipo. Centralize toda a lógica de construção na factory.

## Critérios de Avaliação

- [ ] Interface `INotification` com método `send()`
- [ ] `NotificationFactory` com métodos `createEmail`, `createSMS`, `createPush`
- [ ] Nenhum `new EmailNotification(...)` fora da factory
- [ ] Adicionar novo tipo de notificação requer apenas adicionar método na factory
- [ ] Comportamento idêntico ao original
