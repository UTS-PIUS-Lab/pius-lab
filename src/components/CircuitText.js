"use client";
import { useEffect, useRef, useState } from "react";

// "Circuit Trace Text" — renders as a dark silhouette until it scrolls
// into view, then an electric spark wipes across it and it locks into
// a glowing fill with a brief boot-up flicker. Real text is exposed to
// assistive tech via aria-label; the duplicated glyphs are aria-hidden.
export default function CircuitText({ as: Tag = "span", text, className = "" }) {
  const ref = useRef(null);
  const [state, setState] = useState("idle"); // idle | visible | locked

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setState((s) => (s === "idle" ? "visible" : s));
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (state !== "visible") return;
    const t = setTimeout(() => setState("locked"), 1200);
    return () => clearTimeout(t);
  }, [state]);

  return (
    <Tag
      ref={ref}
      aria-label={text}
      className={`circuit-text ${state !== "idle" ? "is-visible" : ""} ${state === "locked" ? "is-locked" : ""} ${className}`}
    >
      <span className="ct-base" aria-hidden="true">{text}</span>
      <span className="ct-reveal" aria-hidden="true">{text}</span>
      <span className="ct-spark" aria-hidden="true" />
    </Tag>
  );
}
