"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

// Light/dark switch. The initial theme is applied before paint by the inline
// script in app/layout.js (saved choice, else the visitor's OS setting); this
// button flips the `dark` class on <html> and remembers the choice.
export default function ThemeToggle({ className = "" }) {
  const [dark, setDark] = useState(null); // null until mounted, avoids a hydration mismatch

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      title={dark ? "Switch to light theme" : "Switch to dark theme"}
      className={`w-9 h-9 flex items-center justify-center rounded-md border border-tint/10 text-muted hover:text-electric-cyan hover:border-electric-cyan/40 transition-colors ${className}`}
    >
      {dark === null ? (
        <span className="w-[18px] h-[18px]" />
      ) : dark ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}
