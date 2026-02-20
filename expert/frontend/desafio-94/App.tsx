import React, { useState } from "react";
import _ from "lodash";
import * as dateFns from "date-fns";
import * as R from "ramda";

interface Item { id: number; name: string; category: string; price: number; createdAt: Date }

const items: Item[] = Array.from({ length: 100 }, (_, i) => ({
  id: i,
  name: `Item ${i}`,
  category: ["Electronics", "Clothing", "Food"][i % 3],
  price: Math.random() * 1000,
  createdAt: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000),
}));

export default function App() {
  const [sortBy, setSortBy] = useState<"name" | "price">("name");

  // Usa apenas groupBy de lodash (importa 70KB)
  const grouped = _.groupBy(items, "category");

  // Usa apenas format de date-fns (importa 200KB)
  const formatDate = (d: Date) => dateFns.format(d, "dd/MM/yyyy");

  // Usa apenas sortBy de ramda (importa 50KB)
  const sorted = R.sortBy(R.prop(sortBy), items);

  return (
    <div>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value as "name" | "price")}>
        <option value="name">Sort by name</option>
        <option value="price">Sort by price</option>
      </select>
      {Object.entries(grouped).map(([category, categoryItems]) => (
        <div key={category}>
          <h2>{category}</h2>
          {categoryItems.map((item) => (
            <div key={item.id}>{item.name} — {formatDate(item.createdAt)}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
