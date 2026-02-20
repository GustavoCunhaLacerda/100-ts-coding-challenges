export function calculateShipping(weightKg: number, distanceKm: number): number {
  if (weightKg > 30) throw new Error("Weight exceeds limit");
  const base = weightKg * 2.75;
  const distanceFee = distanceKm > 500 ? distanceKm * 0.08 : distanceKm * 0.05;
  const tax = (base + distanceFee) * 0.12;
  return base + distanceFee + tax;
}

export function applyDiscount(price: number, membershipLevel: string): number {
  if (membershipLevel === "gold") return price * 0.85;
  if (membershipLevel === "silver") return price * 0.92;
  if (membershipLevel === "bronze") return price * 0.97;
  return price;
}
