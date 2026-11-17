"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Projects", href: "/projects" },
  { label: "Team",     href: "/team" },
  { label: "Advisory", href: "/advisory" },
  { label: "News",     href: "/news" },
  { label: "Awards",   href: "/awards" },
  { label: "Contact",  href: "/contact" },
];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${
      scrolled ? "bg-ink/90 backdrop-blur-md border-electric-cyan/10 shadow-glow" : "bg-ink/60 backdrop-blur-sm border-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group md:mr-8 lg:mr-16 xl:mr-24">
            <div className="bg-ink-card text-electric-cyan border border-electric-cyan/30 rounded-lg px-3 py-1.5 text-sm font-bold tracking-wide shadow-glow group-hover:border-electric-cyan/60 transition-colors">
              PIUS
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-fg leading-tight">
                Physical Intelligence and Uncrewed Systems Lab
              </div>
              <div className="text-xs text-muted">
                University of Technology Sydney
              </div>
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`uppercase text-xs tracking-widest font-medium px-3 py-2 rounded-md transition-colors ${
                  pathname === item.href
                    ? "text-electric-cyan"
                    : "text-muted hover:text-electric-cyan hover:bg-electric-cyan/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* THEME + MOBILE TOGGLES */}
          <div className="flex items-center gap-3 md:ml-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-soft hover:text-electric-cyan transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden bg-ink border-t border-electric-cyan/10 pb-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-6 py-2.5 uppercase text-xs tracking-widest font-medium transition-colors ${
                  pathname === item.href
                    ? "text-electric-cyan"
                    : "text-muted hover:text-electric-cyan"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
