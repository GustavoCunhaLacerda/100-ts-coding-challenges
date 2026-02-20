import React, { useState } from "react";

export default function MouseTracker() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <div style={{ height: "100vh" }} onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}>
      <p>Mouse position: {pos.x}, {pos.y}</p>
    </div>
  );
}
