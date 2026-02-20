import React, { useState, useEffect } from "react";

interface Product { id: number; name: string; price: number; stock: number; category: string }

export default function ProductDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState<"price" | "name">("name");

  useEffect(() => {
    fetch("/api/products").then((r) => r.json()).then(setProducts);
  }, []);

  // Lógica de negócio misturada com renderização
  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const filtered = products
    .filter((p) => category === "all" || p.category === category)
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => sortBy === "price" ? a.price - b.price : a.name.localeCompare(b.name));

  const totalValue = products.reduce((sum, p) => sum + p.price * p.stock, 0);
  const lowStockCount = products.filter((p) => p.stock < 5).length;
  const avgPrice = products.length ? products.reduce((s, p) => s + p.price, 0) / products.length : 0;

  return (
    <div>
      <div>
        <span>Total inventory value: R${totalValue.toFixed(2)}</span>
        <span>Low stock items: {lowStockCount}</span>
        <span>Average price: R${avgPrice.toFixed(2)}</span>
      </div>
      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((c) => <option key={c} value={c}>{c}</option>)}
      </select>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value as "price" | "name")}>
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
      <ul>
        {filtered.map((p) => (
          <li key={p.id}>{p.name} — R${p.price} (stock: {p.stock})</li>
        ))}
      </ul>
    </div>
  );
}
