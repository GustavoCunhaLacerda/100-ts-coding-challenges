// Acoplamento direto entre Order e todos os sistemas que precisam reagir a ela
export class Order {
  private items: { productId: string; qty: number; price: number }[] = [];
  public status: "pending" | "confirmed" | "shipped" | "delivered" = "pending";

  addItem(productId: string, qty: number, price: number) {
    this.items.push({ productId, qty, price });
  }

  confirm() {
    this.status = "confirmed";
    // Acoplamento direto — Order conhece todos os sistemas
    console.log("[Email] Order confirmation sent");
    console.log("[Inventory] Stock reserved for order");
    console.log("[Analytics] Order confirmed event tracked");
    console.log("[Webhook] POST /webhooks/order-confirmed");
  }

  ship() {
    this.status = "shipped";
    console.log("[Email] Shipping notification sent");
    console.log("[Analytics] Order shipped event tracked");
    console.log("[Webhook] POST /webhooks/order-shipped");
  }
}
