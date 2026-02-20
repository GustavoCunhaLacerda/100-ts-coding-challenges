import React, { useState } from "react";

type CartItem = { id: number; name: string; price: number; qty: number };

export default function ShoppingCart() {
  const [items, setItems] = useState<CartItem[]>([
    { id: 1, name: "Notebook", price: 4500, qty: 1 },
    { id: 2, name: "Mouse", price: 120, qty: 2 },
  ]);

  // Mutação direta do estado — bug sutil
  function incrementQty(id: number) {
    const item = items.find((i) => i.id === id);
    if (item) {
      item.qty++; // Muta o objeto diretamente
      setItems([...items]); // Spread cria novo array mas os objetos internos são os mesmos
    }
  }

  function decrementQty(id: number) {
    const item = items.find((i) => i.id === id);
    if (item && item.qty > 1) {
      item.qty--;
      setItems([...items]);
    }
  }

  function removeItem(id: number) {
    setItems(items.filter((i) => i.id !== id));
  }

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => decrementQty(item.id)}>-</button>
          <span>{item.qty}</span>
          <button onClick={() => incrementQty(item.id)}>+</button>
          <span>R${(item.price * item.qty).toFixed(2)}</span>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
      <strong>Total: R${total.toFixed(2)}</strong>
    </div>
  );
}
