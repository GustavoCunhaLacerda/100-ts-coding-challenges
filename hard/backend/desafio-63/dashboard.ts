// Operações independentes executadas sequencialmente — desperdício de tempo
export async function generateDashboardReport(userId: string): Promise<{
  user: object;
  orders: object[];
  recommendations: object[];
  notifications: object[];
  analytics: object;
}> {
  // Cada await espera o anterior terminar — total: ~2500ms
  const user = await fetch(`/api/users/${userId}`).then((r) => r.json());
  const orders = await fetch(`/api/orders?userId=${userId}`).then((r) => r.json());
  const recommendations = await fetch(`/api/recommendations?userId=${userId}`).then((r) => r.json());
  const notifications = await fetch(`/api/notifications?userId=${userId}`).then((r) => r.json());
  const analytics = await fetch(`/api/analytics?userId=${userId}`).then((r) => r.json());

  return { user, orders, recommendations, notifications, analytics };
}

// Processamento sequencial de itens independentes
export async function processOrders(orderIds: string[]): Promise<void> {
  for (const orderId of orderIds) {
    // Cada ordem processada uma por vez — O(n * latência)
    await fetch(`/api/orders/${orderId}/process`, { method: "POST" });
    console.log(`Processed order ${orderId}`);
  }
}
