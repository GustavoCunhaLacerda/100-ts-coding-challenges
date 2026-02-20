import React, { useState } from "react";

function Avatar({ username, theme }: { username: string; theme: string }) {
  return (
    <div style={{ background: theme === "dark" ? "#333" : "#eee", padding: 8 }}>
      {username[0].toUpperCase()}
    </div>
  );
}

function UserInfo({ username, theme }: { username: string; theme: string }) {
  return (
    <div>
      <Avatar username={username} theme={theme} />
      <p>{username}</p>
    </div>
  );
}

function Header({ username, theme, onToggleTheme }: { username: string; theme: string; onToggleTheme: () => void }) {
  return (
    <header>
      <UserInfo username={username} theme={theme} />
      <button onClick={onToggleTheme}>Toggle Theme</button>
    </header>
  );
}

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const username = "gustavo.dev";

  return (
    <div>
      <Header username={username} theme={theme} onToggleTheme={() => setTheme(t => t === "light" ? "dark" : "light")} />
      <main>Content here</main>
    </div>
  );
}
