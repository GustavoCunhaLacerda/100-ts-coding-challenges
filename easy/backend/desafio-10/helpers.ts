// Tudo em um único arquivo sem organização modular

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateCPF(cpf: string): boolean {
  return cpf.replace(/\D/g, "").length === 11;
}

export function hashPassword(password: string): string {
  // Simulação — não use em produção
  return Buffer.from(password).toString("base64");
}

export function generateToken(userId: number): string {
  return `token_${userId}_${Date.now()}`;
}

export function sendEmail(to: string, subject: string, body: string): void {
  console.log(`Sending email to ${to}: [${subject}] ${body}`);
}

export function sendSMS(phone: string, message: string): void {
  console.log(`Sending SMS to ${phone}: ${message}`);
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("pt-BR");
}

export function formatMoney(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
