"use client";
import { forwardRef, useCallback, useState } from "react";
import Link from "next/link";

// "Plasma Surge" primary CTA — breathing electric border at rest,
// a rotating current + plasma glow fill on hover/focus, and a
// shockwave ring + cyan particle burst on click.
const PlasmaButton = forwardRef(function PlasmaButton(
  { href, onClick, type = "button", children, className = "", variant = "solid", ...rest },
  forwardedRef
) {
  const [bursts, setBursts] = useState([]);

  const handleClick = useCallback(
    (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX || rect.left + rect.width / 2) - rect.left;
      const y = (e.clientY || rect.top + rect.height / 2) - rect.top;
      const id = `${Date.now()}-${Math.random()}`;
      setBursts((b) => [...b, { id, x, y }]);
      setTimeout(() => {
        setBursts((b) => b.filter((p) => p.id !== id));
      }, 700);
      onClick?.(e);
    },
    [onClick]
  );

  const classes = `plasma-btn ${variant === "ghost" ? "plasma-btn-ghost" : ""} ${className}`;

  const content = (
    <>
      <span className="plasma-border" aria-hidden="true" />
      <span className="plasma-fill" aria-hidden="true" />
      <span className="plasma-label">{children}</span>
      {bursts.map((b) => (
        <span key={b.id} className="plasma-shockwave" style={{ left: b.x, top: b.y }} aria-hidden="true">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="plasma-particle"
              style={{ "--angle": `${i * 60}deg` }}
            />
          ))}
        </span>
      ))}
    </>
  );

  if (href) {
    return (
      <Link href={href} ref={forwardedRef} className={classes} onClick={handleClick} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button ref={forwardedRef} type={type} className={classes} onClick={handleClick} {...rest}>
      {content}
    </button>
  );
});

export default PlasmaButton;
