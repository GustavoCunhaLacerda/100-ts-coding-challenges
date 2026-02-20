import React from "react";

export function PrimaryButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button onClick={onClick} style={{ background: "#007bff", color: "#fff", padding: "8px 16px", borderRadius: 4, border: "none", cursor: "pointer", fontSize: 14 }}>
      {children}
    </button>
  );
}

export function DangerButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button onClick={onClick} style={{ background: "#dc3545", color: "#fff", padding: "8px 16px", borderRadius: 4, border: "none", cursor: "pointer", fontSize: 14 }}>
      {children}
    </button>
  );
}

export function OutlineButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button onClick={onClick} style={{ background: "transparent", color: "#007bff", padding: "8px 16px", borderRadius: 4, border: "1px solid #007bff", cursor: "pointer", fontSize: 14 }}>
      {children}
    </button>
  );
}

export function Card({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <div style={{ background: "#fff", border: "1px solid #dee2e6", borderRadius: 8, padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
      {title && <h3 style={{ margin: "0 0 12px", fontSize: 16, color: "#212529" }}>{title}</h3>}
      {children}
    </div>
  );
}

export function Badge({ label, variant }: { label: string; variant: "success" | "warning" | "danger" | "info" }) {
  const colors = { success: "#28a745", warning: "#ffc107", danger: "#dc3545", info: "#17a2b8" };
  return (
    <span style={{ background: colors[variant], color: "#fff", padding: "2px 8px", borderRadius: 12, fontSize: 12 }}>
      {label}
    </span>
  );
}
