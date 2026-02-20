type Order = { id: number; status: string; total: number; customerId: number };

export function getApprovedTotals(orders: Order[]): number[] {
  const result = [];
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].status === "approved") {
      result.push(orders[i].total);
    }
  }
  return result;
}

export function sumByCustomer(orders: Order[], customerId: number): number {
  let sum = 0;
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].customerId === customerId) {
      sum += orders[i].total;
    }
  }
  return sum;
}

export function getOrderIds(orders: Order[]): number[] {
  const ids = [];
  for (let i = 0; i < orders.length; i++) {
    ids.push(orders[i].id);
  }
  return ids;
}

export function hasExpiredOrder(orders: Order[]): boolean {
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].status === "expired") {
      return true;
    }
  }
  return false;
}
