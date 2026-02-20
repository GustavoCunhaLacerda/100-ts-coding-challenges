import React, { useState } from "react";

// Componente monolítico com muitas props — API inflexível
interface TabsProps {
  tabs: { id: string; label: string; content: React.ReactNode; disabled?: boolean; icon?: React.ReactNode }[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
  variant?: "default" | "pills" | "underline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export function Tabs({ tabs, defaultTab, onChange, variant = "default", size = "md", fullWidth = false }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab ?? tabs[0]?.id);

  function handleTabClick(id: string, disabled?: boolean) {
    if (disabled) return;
    setActiveTab(id);
    onChange?.(id);
  }

  return (
    <div>
      <div style={{ display: "flex", gap: 4, borderBottom: variant === "default" ? "1px solid #ccc" : "none" }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id, tab.disabled)}
            disabled={tab.disabled}
            style={{
              padding: size === "sm" ? "4px 8px" : size === "lg" ? "12px 24px" : "8px 16px",
              flex: fullWidth ? 1 : undefined,
              background: activeTab === tab.id ? "#007bff" : "transparent",
              color: activeTab === tab.id ? "#fff" : "#333",
              border: "none",
              cursor: tab.disabled ? "not-allowed" : "pointer",
              opacity: tab.disabled ? 0.5 : 1,
            }}
          >
            {tab.icon && <span>{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {tabs.find((t) => t.id === activeTab)?.content}
      </div>
    </div>
  );
}
