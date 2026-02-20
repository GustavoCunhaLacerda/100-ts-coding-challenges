import React, { useState } from "react";

export default function NotificationStack() {
  const [notifications, setNotifications] = useState<{ id: number; message: string; type: "success" | "error" }[]>([]);

  function addNotification(type: "success" | "error") {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message: `${type} notification ${id}`, type }]);
    // Remove após 3 segundos — sem animação de saída
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 3000);
  }

  return (
    <div>
      <button onClick={() => addNotification("success")}>Add Success</button>
      <button onClick={() => addNotification("error")}>Add Error</button>

      {/* Notificações aparecem e desaparecem abruptamente sem animação */}
      <div style={{ position: "fixed", top: 16, right: 16, display: "flex", flexDirection: "column", gap: 8 }}>
        {notifications.map((n) => (
          <div
            key={n.id}
            style={{
              padding: "12px 16px",
              borderRadius: 4,
              background: n.type === "success" ? "#d4edda" : "#f8d7da",
              border: `1px solid ${n.type === "success" ? "#28a745" : "#dc3545"}`,
              minWidth: 250,
            }}
          >
            {n.message}
          </div>
        ))}
      </div>
    </div>
  );
}
