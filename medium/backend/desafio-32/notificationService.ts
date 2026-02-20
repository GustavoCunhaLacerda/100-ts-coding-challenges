import nodemailer from "nodemailer";
import twilio from "twilio";

// Dependências hardcoded — impossível testar sem enviar emails/SMS reais
export class NotificationService {
  private mailer = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: { user: "app@gmail.com", pass: "secret123" },
  });

  private smsClient = twilio("ACCOUNT_SID", "AUTH_TOKEN");

  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    await this.mailer.sendMail({ from: "app@gmail.com", to, subject, text: body });
  }

  async sendSMS(to: string, message: string): Promise<void> {
    await this.smsClient.messages.create({ from: "+15551234567", to, body: message });
  }

  async notifyUser(userId: string, event: string): Promise<void> {
    const email = `user${userId}@example.com`;
    const phone = `+5511999${userId}`;
    await this.sendEmail(email, "Notification", event);
    await this.sendSMS(phone, event);
  }
}
