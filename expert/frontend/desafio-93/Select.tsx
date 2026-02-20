import React, { useState, useRef, useEffect } from "react";

interface Option { value: string; label: string; disabled?: boolean }

interface SelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

// Lógica e apresentação completamente acopladas
export default function Select({ options, value, onChange, placeholder = "Select...", disabled = false }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((o) => o.value === value);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (disabled) return;
    switch (e.key) {
      case "Enter": case " ": e.preventDefault(); setIsOpen((o) => !o); break;
      case "ArrowDown": e.preventDefault(); setFocusedIndex((i) => Math.min(i + 1, options.length - 1)); break;
      case "ArrowUp": e.preventDefault(); setFocusedIndex((i) => Math.max(i - 1, 0)); break;
      case "Escape": setIsOpen(false); break;
    }
  }

  return (
    <div ref={containerRef} style={{ position: "relative", width: 200 }}>
      <button
        onClick={() => !disabled && setIsOpen((o) => !o)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        style={{ width: "100%", padding: "8px 12px", textAlign: "left", background: "#fff", border: "1px solid #ccc", borderRadius: 4, cursor: disabled ? "not-allowed" : "pointer" }}
      >
        {selectedOption?.label ?? placeholder}
      </button>
      {isOpen && (
        <ul role="listbox" style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "#fff", border: "1px solid #ccc", borderRadius: 4, listStyle: "none", margin: 0, padding: 0, zIndex: 100 }}>
          {options.map((option, index) => (
            <li
              key={option.value}
              role="option"
              aria-selected={option.value === value}
              aria-disabled={option.disabled}
              onClick={() => { if (!option.disabled) { onChange(option.value); setIsOpen(false); } }}
              style={{ padding: "8px 12px", background: index === focusedIndex ? "#f0f0f0" : "transparent", cursor: option.disabled ? "not-allowed" : "pointer", opacity: option.disabled ? 0.5 : 1 }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
