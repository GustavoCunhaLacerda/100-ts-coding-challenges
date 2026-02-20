import React, { useState } from "react";

type Theme = "light" | "dark";
type User = { name: string; avatar: string; role: string };

// Prop drilling de 4 níveis para theme e user
function Avatar({ user, theme }: { user: User; theme: Theme }) {
  return (
    <div style={{ background: theme === "dark" ? "#333" : "#eee", borderRadius: "50%", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center" }}>
      {user.name[0]}
    </div>
  );
}

function NavItem({ label, theme }: { label: string; theme: Theme }) {
  return <li style={{ color: theme === "dark" ? "#fff" : "#000" }}>{label}</li>;
}

function Sidebar({ theme, user }: { theme: Theme; user: User }) {
  return (
    <aside>
      <Avatar user={user} theme={theme} />
      <ul>
        {["Dashboard", "Products", "Orders", "Settings"].map((l) => (
          <NavItem key={l} label={l} theme={theme} />
        ))}
      </ul>
    </aside>
  );
}

function TopBar({ theme, user, onToggleTheme }: { theme: Theme; user: User; onToggleTheme: () => void }) {
  return (
    <header>
      <span style={{ color: theme === "dark" ? "#fff" : "#000" }}>Welcome, {user.name}</span>
      <Avatar user={user} theme={theme} />
      <button onClick={onToggleTheme}>Toggle Theme</button>
    </header>
  );
}

function Layout({ theme, user, onToggleTheme }: { theme: Theme; user: User; onToggleTheme: () => void }) {
  return (
    <div>
      <TopBar theme={theme} user={user} onToggleTheme={onToggleTheme} />
      <Sidebar theme={theme} user={user} />
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState<Theme>("light");
  const user: User = { name: "Gustavo", avatar: "", role: "admin" };
  return <Layout theme={theme} user={user} onToggleTheme={() => setTheme((t) => t === "light" ? "dark" : "light")} />;
}
