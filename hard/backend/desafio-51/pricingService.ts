// Sem Strategy Pattern — lógica de desconto acoplada ao serviço
type CustomerType = "regular" | "vip" | "employee" | "wholesale";

export class PricingService {
  calculatePrice(basePrice: number, customerType: CustomerType, quantity: number): number {
    let price = basePrice * quantity;

    if (customerType === "regular") {
      if (quantity >= 10) price *= 0.95;
    } else if (customerType === "vip") {
      price *= 0.85;
      if (quantity >= 5) price *= 0.97;
    } else if (customerType === "employee") {
      price *= 0.70;
    } else if (customerType === "wholesale") {
      if (quantity < 50) throw new Error("Wholesale requires minimum 50 units");
      price *= 0.60;
      if (quantity >= 100) price *= 0.95;
    }

    return Math.round(price * 100) / 100;
  }
}
