import React, { useState } from "react";

type Product = { id: number; name: string; price: number; category: string };

const products: Product[] = [
  { id: 1, name: "Notebook", price: 4500, category: "Electronics" },
  { id: 2, name: "Mouse", price: 120, category: "Electronics" },
  { id: 3, name: "Desk", price: 800, category: "Furniture" },
];

export default function ProductPage() {
  const [filter, setFilter] = useState("");

  return (
    <div>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter by category"
      />
      <div>
        {products
          .filter((p) => p.category.toLowerCase().includes(filter.toLowerCase()))
          .map((p) => (
            <div key={p.id} style={{ border: "1px solid #ccc", margin: 8, padding: 8 }}>
              <strong>{p.name}</strong>
              <span> — {p.category}</span>
              <span> — R$ {p.price.toFixed(2)}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
