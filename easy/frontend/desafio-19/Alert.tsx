import React from "react";

type AlertType = "success" | "warning" | "error" | "info";

interface AlertProps {
  type: AlertType;
  message: string;
  onClose: () => void;
}

export default function Alert({ type, message, onClose }: AlertProps) {
  const colors: Record<AlertType, string> = {
    success: "#d4edda",
    warning: "#fff3cd",
    error: "#f8d7da",
    info: "#d1ecf1",
  };

  const borderColors: Record<AlertType, string> = {
    success: "#28a745",
    warning: "#ffc107",
    error: "#dc3545",
    info: "#17a2b8",
  };

  return (
    <div
      style={{
        backgroundColor: colors[type],
        border: `1px solid ${borderColors[type]}`,
        borderRadius: 4,
        padding: "12px 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
      }}
    >
      <span style={{ fontSize: 14, color: "#333" }}>{message}</span>
      <button
        onClick={onClose}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: 18,
          lineHeight: 1,
          color: "#666",
        }}
      >
        ×
      </button>
    </div>
  );
}
