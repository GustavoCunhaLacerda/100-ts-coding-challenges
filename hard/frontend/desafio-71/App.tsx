import React, { useState } from "react";

// Páginas simuladas — em um projeto real seriam imports de arquivos separados
function Dashboard() { return <div>Dashboard Content</div>; }
function AdminPanel() { return <div>Admin Panel Content</div>; }
function Reports() { return <div>Reports Content</div>; }
function Settings() { return <div>Settings Content</div>; }

export default function App() {
  const [page, setPage] = useState<"dashboard" | "admin" | "reports" | "settings">("dashboard");

  return (
    <div>
      <nav style={{ display: "flex", gap: 8, padding: 16, borderBottom: "1px solid #ccc" }}>
        {(["dashboard", "admin", "reports", "settings"] as const).map((p) => (
          <button key={p} onClick={() => setPage(p)} style={{ fontWeight: page === p ? "bold" : "normal" }}>
            {p}
          </button>
        ))}
      </nav>
      <main style={{ padding: 16 }}>
        {page === "dashboard" && <Dashboard />}
        {page === "admin" && <AdminPanel />}
        {page === "reports" && <Reports />}
        {page === "settings" && <Settings />}
      </main>
    </div>
  );
}
