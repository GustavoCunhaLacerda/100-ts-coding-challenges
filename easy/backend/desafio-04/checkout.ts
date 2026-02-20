type Cart = { items: string[]; total: number; coupon?: string };
type User = { isActive: boolean; isVerified: boolean; creditLimit: number };

export function processCheckout(user: User, cart: Cart): string {
  if (user.isActive) {
    if (user.isVerified) {
      if (cart.items.length > 0) {
        if (cart.total <= user.creditLimit) {
          if (cart.coupon) {
            if (cart.coupon.startsWith("PROMO")) {
              return "Checkout with promo coupon processed";
            } else {
              return "Checkout with regular coupon processed";
            }
          } else {
            return "Checkout processed";
          }
        } else {
          return "Credit limit exceeded";
        }
      } else {
        return "Cart is empty";
      }
    } else {
      return "User not verified";
    }
  } else {
    return "User not active";
  }
}
