type PaymentMethod = "credit_card" | "pix" | "boleto" | "paypal";

interface Payment {
  method: PaymentMethod;
  amount: number;
  details: Record<string, string>;
}

export function processPayment(payment: Payment): string {
  switch (payment.method) {
    case "credit_card":
      console.log(`Charging card ${payment.details.cardNumber} for R$${payment.amount}`);
      return `CC-${Date.now()}`;

    case "pix":
      console.log(`Generating PIX key for R$${payment.amount}`);
      return `PIX-${Date.now()}`;

    case "boleto":
      console.log(`Generating boleto for R$${payment.amount} due in 3 days`);
      return `BOL-${Date.now()}`;

    case "paypal":
      console.log(`Redirecting to PayPal for R$${payment.amount}`);
      return `PP-${Date.now()}`;

    default:
      throw new Error(`Unsupported payment method: ${payment.method}`);
  }
}

export function getPaymentFee(method: PaymentMethod, amount: number): number {
  switch (method) {
    case "credit_card": return amount * 0.03;
    case "pix": return 0;
    case "boleto": return 3.5;
    case "paypal": return amount * 0.05 + 0.3;
    default: return 0;
  }
}
