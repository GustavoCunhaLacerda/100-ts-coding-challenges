type OrderItem = { productId: string; quantity: number; unitPrice: number };
type Order = { customerId: string; items: OrderItem[]; couponCode?: string };

export async function placeOrder(order: Order): Promise<string> {
  // Validação misturada com lógica de negócio
  if (!order.customerId) throw new Error("Customer ID is required");
  if (!order.items || order.items.length === 0) throw new Error("Order must have at least one item");
  for (const item of order.items) {
    if (!item.productId) throw new Error("Product ID is required");
    if (item.quantity <= 0) throw new Error("Quantity must be positive");
    if (item.unitPrice < 0) throw new Error("Unit price cannot be negative");
  }

  // Lógica de negócio
  let subtotal = order.items.reduce((sum, i) => sum + i.quantity * i.unitPrice, 0);

  // Validação de cupom misturada com aplicação de desconto
  let discount = 0;
  if (order.couponCode) {
    if (order.couponCode.length < 4) throw new Error("Invalid coupon code");
    if (order.couponCode.startsWith("SAVE10")) discount = subtotal * 0.1;
    else if (order.couponCode.startsWith("SAVE20")) discount = subtotal * 0.2;
    else throw new Error("Unknown coupon code");
  }

  const total = subtotal - discount;
  if (total < 0) throw new Error("Total cannot be negative");

  // Persistência simulada
  const orderId = `ORD-${Date.now()}`;
  console.log(`Order ${orderId} placed. Total: ${total}`);
  return orderId;
}
