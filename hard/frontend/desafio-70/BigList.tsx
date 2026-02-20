import React from "react";

const items = Array.from({ length: 50_000 }, (_, i) => ({
  id: i,
  name: `Item ${i}`,
  value: Math.random() * 1000,
}));

export default function BigList() {
  return (
    <div style={{ height: "600px", overflow: "auto" }}>
      {items.map((item) => (
        <div
          key={item.id}
          style={{ height: 50, display: "flex", alignItems: "center", borderBottom: "1px solid #eee", padding: "0 16px" }}
        >
          <span>{item.name}</span>
          <span style={{ marginLeft: "auto" }}>{item.value.toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
}
