"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Projects", href: "/projects" },
  { label: "Team",     href: "/team" },
  { label: "Advisory", href: "/advisory" },
  { label: "News",     href: "/news" },
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
      scrolled ? "bg-[#030712]/90 backdrop-blur-md border-electric-cyan/10 shadow-glow" : "bg-[#030712]/60 backdrop-blur-sm border-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-[#0B1220] text-electric-cyan border border-electric-cyan/30 rounded-lg px-3 py-1.5 text-sm font-bold tracking-wide shadow-glow group-hover:border-electric-cyan/60 transition-colors">
              PIUS
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-white leading-tight">
                Physical Intelligence and Uncrewed Systems Lab
              </div>
              <div className="text-xs text-slate-400">
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
                    : "text-slate-400 hover:text-electric-cyan hover:bg-electric-cyan/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-300 hover:text-electric-cyan transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#030712] border-t border-electric-cyan/10 pb-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-6 py-2.5 uppercase text-xs tracking-widest font-medium transition-colors ${
                  pathname === item.href
                    ? "text-electric-cyan"
                    : "text-slate-400 hover:text-electric-cyan"
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
