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

export function notifyUserRegistration(user: { email: string; phone: string; deviceToken: string }) {
  const email = new EmailNotification(user.email, "Welcome!", "Thanks for registering.");
  const sms = new SMSNotification(user.phone, "Welcome to our platform!");
  const push = new PushNotification(user.deviceToken, "Welcome!", { action: "open_app" });
  email.send(); sms.send(); push.send();
}

export function notifyOrderShipped(user: { email: string; phone: string; deviceToken: string }, orderId: string) {
  const email = new EmailNotification(user.email, "Order Shipped", `Your order ${orderId} is on the way!`);
  const sms = new SMSNotification(user.phone, `Order ${orderId} shipped!`);
  const push = new PushNotification(user.deviceToken, "Order Shipped", { orderId });
  email.send(); sms.send(); push.send();
}
