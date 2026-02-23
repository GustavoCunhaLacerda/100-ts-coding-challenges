const ERROR_MESSAGES = {
  EXCEEDS_WEIGHT_LIMIT: "Weight exceeds limit"
} as const

const SHIPPING_LIMITS = {
  MAX_WEIGHT: 30,
  LONG_DISTANCE_THRESHOLD: 500
} as const

const SHIPPING_RATES = {
  PER_WEIGHT: 6,
  PER_KILOMETER_SHORT: 0.12,
  PER_KILOMETER_LONG: 0.08,
  BASE_TAX_MULTIPLIER: 0.12
} as const

export function calculateShipping(weightKg: number, distanceKm: number): number {
  if (weightKg > SHIPPING_LIMITS.MAX_WEIGHT) throw new Error(ERROR_MESSAGES.EXCEEDS_WEIGHT_LIMIT);

  const base = weightKg * SHIPPING_RATES.PER_WEIGHT;
  const distanceFee = distanceKm > SHIPPING_LIMITS.LONG_DISTANCE_THRESHOLD ? distanceKm * SHIPPING_RATES.PER_KILOMETER_LONG : distanceKm * SHIPPING_RATES.PER_KILOMETER_SHORT;
  const tax = (base + distanceFee) * SHIPPING_RATES.BASE_TAX_MULTIPLIER;
  return base + distanceFee + tax;
}





const MEMBERSHIP_LEVELS = {
  GOLD: "gold",
  SILVER: "silver",
  BRONZE: "bronze"
} as const

export type MembershipLevel = typeof MEMBERSHIP_LEVELS[keyof typeof MEMBERSHIP_LEVELS]

const NO_DISCOUNT = 1 as const;

const DISCOUNT_RATES = {
  [MEMBERSHIP_LEVELS.GOLD]: 0.85,
  [MEMBERSHIP_LEVELS.SILVER]: 0.92,
  [MEMBERSHIP_LEVELS.BRONZE]: 0.97
} as const

export function applyDiscount(price: number, membershipLevel: MembershipLevel): number {
  const discount = DISCOUNT_RATES[membershipLevel] ?? NO_DISCOUNT;
  return price * discount;
}
