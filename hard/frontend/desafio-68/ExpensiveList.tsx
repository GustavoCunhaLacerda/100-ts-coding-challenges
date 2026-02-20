import React, { useState } from "react";

const data = Array.from({ length: 10_000 }, (_, i) => ({
  id: i,
  value: Math.random() * 1000,
  label: `Item ${i}`,
}));

export default function ExpensiveList() {
  const [filter, setFilter] = useState("");
  const [multiplier, setMultiplier] = useState(1);

  const filtered = data
    .filter((d) => d.label.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => a.value - b.value)
    .slice(0, 100);

  const handleClick = (id: number) => console.log(`Clicked ${id} with multiplier ${multiplier}`);

  return (
    <div>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Filter..." />
      <input type="number" value={multiplier} onChange={(e) => setMultiplier(Number(e.target.value))} />
      {filtered.map((item) => (
        <div key={item.id} onClick={() => handleClick(item.id)}>
          {item.label}: {(item.value * multiplier).toFixed(2)}
        </div>
      ))}
    </div>
  );
}
