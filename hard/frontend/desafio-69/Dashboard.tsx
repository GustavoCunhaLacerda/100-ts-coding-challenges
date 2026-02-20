import React, { useState } from "react";

function StatsCard({ title, value, color }: { title: string; value: number; color: string }) {
  console.log(`StatsCard ${title} rendered`);
  return <div style={{ color }}><h3>{title}</h3><p>{value}</p></div>;
}

function Chart({ data }: { data: number[] }) {
  console.log("Chart rendered");
  return <div>Chart: {data.join(", ")}</div>;
}

export default function Dashboard() {
  const [tick, setTick] = useState(0);
  const chartData = [10, 20, 30, 40, 50];

  return (
    <div>
      <button onClick={() => setTick((t) => t + 1)}>Refresh ({tick})</button>
      <StatsCard title="Revenue" value={42000} color="#28a745" />
      <StatsCard title="Orders" value={1337} color="#007bff" />
      <Chart data={chartData} />
    </div>
  );
}
