type CartItem = { productId: number; quantity: number; price: number };
type Cart = { items: CartItem[]; discount: number };

export function addItem(cart: Cart, item: CartItem): Cart {
  cart.items.push(item);
  return cart;
}

export function removeItem(cart: Cart, productId: number): Cart {
  const index = cart.items.findIndex((i) => i.productId === productId);
  if (index !== -1) cart.items.splice(index, 1);
  return cart;
}

export function applyDiscount(cart: Cart, discount: number): Cart {
  cart.discount = discount;
  return cart;
}

export function calculateTotal(cart: Cart): number {
  let total = 0;
  cart.items.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total * (1 - cart.discount / 100);
}
